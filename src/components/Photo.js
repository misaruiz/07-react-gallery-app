import React from 'react';

const Photo = (props) => (
    <div className="col-6 col-md-3 pb-4">
        <div className="ratio ratio-4x3 shadow rounded">
        <img class="rounded" src={props.url} alt={props.title} />
        </div>
        
    </div>

    
);

export default Photo;