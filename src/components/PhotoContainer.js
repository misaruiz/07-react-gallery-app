import React from "react";
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => { 

    const results = props.data;
    console.log(`PhotoContainer: ${results}`)
    
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => 
        <Photo 
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} 
            key={photo.id} 
        />);
    } else {
      photos = <NotFound />
    }
    
    return(
      <ul className="gif-list">
        { photos }
      </ul> 
    );
    
  }

export default PhotoContainer;