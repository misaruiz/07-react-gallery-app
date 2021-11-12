// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import apiKey from './config';
import axios from 'axios';

//Components
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  performSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos,
        loading: false
      })
      console.log(this.state.photos.photo);
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }
  

    render() {
      return (
        <div class="container">
          <Nav />
          <PhotoContainer data={this.state.photos}  />
        </div>
      );
    }
}

export default App;
