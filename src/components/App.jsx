import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setItems(
        prevItems => {
            return [...prevItems, inputText];
        }
    );

    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text"
          onChange={handleChange}
          value={inputText}  
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {items.map( item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;