import React from 'react';

function Card(props) {
    
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label={props.nameRef}>
                    {props.emojiRef}
                </span>
                <span>
                    {props.nameRef}
                </span>
            </dt>
            <dd>
                {props.meaningRef}
            </dd>
        </div>
    );

}

export default Card;