import React, { Component } from "react";
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component { 

  componentDidUpdate() {
    if (this.props.searchText !== this.props.query) {
      this.props.getPhotos(this.props.query);
    }
  }

  render() {
    const results = this.props.data;
    let photos;

    if (results.length > 0) {
      photos = results.map(photo => 
        <Photo 
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} 
            key={photo.id}
            title={photo.title}
        />
      );
    } else {
      photos = <NotFound />
    }

    { document.title = this.props.titleTag }

    return (
      
      <ul className="gif-list">
        { photos }
      </ul> 
    );
  }
    
} 

export default PhotoContainer;