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
    let headline;
    let isLoading = this.props.state.loading;

    if (results.length > 0 || !isLoading) {
      headline = 'Results';
      photos = results.map(photo => 
        <Photo 
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} 
            key={photo.id}
            title={photo.title}
        />
      );
    } else if (isLoading) {
        headline = 'Loading...';

    } else {
      photos = <NotFound />
    }

    document.title = this.props.titleTag;

    return (
      <div className="photo-container">
        <h2>{ headline }</h2>
          <ul>
            { photos }
          </ul> 
      </div>
    );
  }
    
} 

export default PhotoContainer;