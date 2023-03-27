import React from 'react';
import Input from './Input'

var btnString = " ";

function Form(props) {
    
    props.isRegisteredRef ? btnString = "Login" : btnString = "Register";
    
    return (
        <form className="form">

        <Input 
            typeRef = "text"
            placeholderRef = "Username"
        />
        <Input 
            typeRef = "password"
            placeholderRef = "Password"
        />

        {!props.isRegisteredRef && <Input typeRef = "password" placeholderRef = "Confirm Password"/>}
        
        <button type="submit">{btnString}</button>
        </form>
    );        
}

export default Form;