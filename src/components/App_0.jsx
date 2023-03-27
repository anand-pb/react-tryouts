import React, {useState} from "react";

function App() {
  
//   const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleFname(event) {
    let currName = event.target.value;
    setFname(currName);
  }

  function handleLname(event) {
    let currName = event.target.value;
    setLname(currName);
  }

//   function handleClick() {
//     const name = fname + lname; 
//     setName(name);
//   }

  return (
    <div className="container">
      <h1>Hello {fname}{lname}</h1>
      {/* <form onSubmit={handleClick}> */}
      <form>
        <input 
          name="fName" 
          placeholder="First Name"
          onChange={handleFname}  
          value={fname}
        />
        <input 
          name="lName" 
          placeholder="Last Name" 
          onChange={handleLname}  
          value={lname}  
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;