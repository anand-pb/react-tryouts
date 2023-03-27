import React from 'react';
import Avatar from './Avatar';
import Details from './Details';

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <p>{props.ID}</p>
                    <h2 className='name'>{props.name}</h2>
                    <Avatar imgsrc={props.imgsrc} alt={props.alt}/>
                </div>
                <Details work={props.work} concept={props.concept}/>
            </div>
        </div>
    );
}

export default Card;