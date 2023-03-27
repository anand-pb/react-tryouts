import React from 'react';

function Input(props) {
    return (
        <input 
            type = {props.typeRef} 
            placeholder = {props.placeholderRef}             
        />
    );
}

export default Input;