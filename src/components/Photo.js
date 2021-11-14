import React from 'react';

const Photo = (props) => (
    <li className="rounded">
        <img src={props.url} alt={props.title} />
    </li>
);

export default Photo;