// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import apiKey from './config';
import axios from 'axios';

//Components
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import PageNotFound from './components/PageNotFound';

class App extends Component {

  state = {
    sequoia: [],
    yosemite: [],
    yellowstone: [],
    query: [],
    searchText: [],
    loading: true
  }

  componentDidMount() {
    const navCategories = [
      "sequoia", "yosemite", "yellowstone"
    ];

    navCategories.map(navCategory => this.getPhotos(navCategory, true));
  }

  isLoading = (bool) => {
    this.setState({ loading: bool })
  }

  getPhotos = (query, ofCategory = false) => {
    this.isLoading(true);
    axios
    .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      if (ofCategory) {
        this.setState({
          [query]: res.data.photos.photo,
        })
      } else {
        this.setState({
          searchText: query,
          query: res.data.photos.photo
        })
      }
      this.isLoading(false);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    
  };


    render() {
      return (
        <BrowserRouter>
          <Nav>
            <SearchForm onSearch={this.getPhotos} />
          </Nav>
          <div className="container-fluid pt-5 text-center">

              { (this.state.loading)
                ? <div class="text-center">
                    <h1 className="text-white">Loading...</h1>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                : <Switch>
                    <Route exact path="/" render={() => 
                      <Redirect to="/sequoia" />
                    } />
                    <Route exact path="/sequoia" render={() => 
                      <PhotoContainer 
                        data={this.state.sequoia} 
                        titleTag="sequoia"
                      /> 
                    }/>
                    <Route exact path="/yosemite" render={() => 
                      <PhotoContainer 
                        data={this.state.yosemite} 
                        titleTag="Yosemite" 
                      /> 
                    }/>
                    <Route exact path="/yellowstone" render={() => 
                      <PhotoContainer 
                        data={this.state.yellowstone} 
                        titleTag="yellowstone" 
                      /> 
                    }/>
                    <Route exact path="/search/:query" render={({ match }) => 
                      <PhotoContainer 
                        data={this.state.query} 
                        query={match.params.query}
                        getPhotos={this.getPhotos}
                        searchText={this.state.searchText}
                        titleTag={this.state.searchText}
                      /> } 
                    />
                    <Route render={() => <PageNotFound />} />
                  </Switch>
                }
            
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
