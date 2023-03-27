import React from 'react';

function Details(props) {
    return (
        <div className='bottom'>
        <p className='info'>{props.work}</p>
        <p className='info'>{props.concept}</p>
        </div>        
    );
}

export default Details;