import React, {useState} from "react";

function App() {
  
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleFullName(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const {value, name} = event.target;

    // setFullName(newValue);
    // console.log(newValue);
    // console.log(inputName);

    setFullName(
        prevValue => {
            if(name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName
                };
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value
                };
            }
        }
    ); 
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName" 
          placeholder="First Name"
          onChange={handleFullName}  
        //   value={fullName.fName}
        />
        <input 
          name="lName" 
          placeholder="Last Name" 
          onChange={handleFullName}  
        //   value={fullName.lName}  
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;