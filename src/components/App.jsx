import React, { useState } from "react";

function App() {

//   function handleChange(event) {
//     console.log(event.target.type);
//     console.log(event.target.placeholder);
//     console.log(event.target.onChange);
//   }

  const [name, setName] = useState();

  const [greetName, setGreetName] = useState("");

  function handleChange(event) {
    let currName = event.target.value;
    setName(currName);
  }

  function updateGreeting(event) {
    setGreetName(name);

    event.preventDefault();
  }  

  return (
    <div className="container">
      <form onSubmit={updateGreeting}> 
      <h1>Hello {greetName}</h1>
      <input 
        type="text" 
        placeholder="What's your name?" 
        onChange={handleChange}
        value={name}    
      />
      {/* <button onClick={updateGreeting}>Submit</button> */}
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
