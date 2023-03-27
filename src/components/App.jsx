import React from "react";
import Login from './Login';

// var isLoggedIn = true;
var userIsRegistered = true;

// function renderConditionally() {
//     if (isLoggedIn) {
//         return (
//             <h1>Hello</h1>
//         );
//     } else {
//         return (
//             <Login />
//         );        
//     }
// }

function App() {
  return (
    <div className="container">
      {/* <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
      {/* {renderConditionally()} */}
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* {isLoggedIn === true && <h1>Hello</h1>} */}
      {/* {isLoggedIn && <h1>Hello</h1>} */}
      {/* <Login /> */}
    </div>
  );
}

export default App;