import React from 'react';

function Avatar(props) {
    return (
        <img 
            className='circle-img'
            src={props.imgsrc}
            alt={props.name}
        />
    );
}

export default Avatar;