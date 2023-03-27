import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState('Hello');
  
  const [buttonColor, setButtonColor] = useState();

  function handleMouseOver() {
    setButtonColor("black");
  }

  function handleMouseOut() {
    setButtonColor("white");
  }  
  
  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: buttonColor}}>Submit</button>
    </div>
  );
}

export default App;