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

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     photos: [],
  //     loading: true
  //   };
  // } 
  state = {
    // photos: [],
    sunset: [],
    eclipse: [],
    shadow: [],
    query: [],
    searchText: [],
    loading: true
  }

  componentDidMount() {
    // this.performSearch();
    const navCategories = [
      "sunset", "eclipse", "shadow"
    ];

    navCategories.map(navCategory => this.getPhotos(navCategory, true));
  }

    getPhotos = (query, ofCategory = false) => {
      axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        if (ofCategory) {
          this.setState({
            [query]: res.data.photos.photo
          })
        } else {
          this.setState({
            searchText: query,
            query: res.data.photos.photo
          })
        }
        this.setState({
          // sunsets: res.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  
  // performSearch = query => {
  //   this.setState({ loading: true});
  // }
  

    render() {
      return (
        <BrowserRouter>
          <div className="container">
            <Nav />
            <SearchForm onSearch={this.getPhotos} />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/sunsets" /> } />
              <Route exact path="/sunsets" render={() => 
                <PhotoContainer data={this.state.sunset} titleTag="Sunsets" /> } 
              />
              <Route exact path="/eclipses" render={() => 
                <PhotoContainer data={this.state.eclipse} titleTag="Eclipses" /> } 
              />
              <Route exact path="/shadows" render={() => 
                <PhotoContainer data={this.state.shadow} titleTag="Shadows" /> } 
              />
              <Route exact path="/search/:query" children={({ match }) => 
                <PhotoContainer 
                  data={this.state.query} 
                  query={match.params.query}
                  getPhotos={this.getPhotos}
                  searchText={this.state.searchText}
                  titleTag={this.state.searchText}
                /> } 
              />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
