import React, { Component } from "react";
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component { 

  // Checks to see if search text matches the url query, if not then it fetches the url query photos
  componentDidUpdate() {
    if (this.props.searchText !== this.props.query) {
      this.props.getPhotos(this.props.query);
    }
  }

  render() {
    const results = this.props.data;
    let photos;

    // If photos are found then it displays photos, else it displays a not found message
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
    // Sets the page title tag
    document.title = this.props.titleTag;

    return (
      <div className="photo-container">
          <h1 className="text-white">Results for {this.props.titleTag}</h1>
          <div className="row pt-4 ps-0">
            { photos }
          </div> 
      </div>
    );
  }
    
} 

export default PhotoContainer;