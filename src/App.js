// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import apiKey from './config';
import axios from 'axios';

//Components
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

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
    sunsets: [],
    loading: true
  }

  componentDidMount() {
    // this.performSearch();
    axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          sunsets: res.data.photos.photo,
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
            <Switch>
              <Route exact path="/" render={() => <PhotoContainer data={this.state.sunsets} /> } />
              {/* <Route exact path="/sunsets" render={() => 
                                                  <PhotoContainer data={this.state.sunsets} alt="sunsets" /> } 
              /> */}
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
