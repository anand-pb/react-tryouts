import React from "react";
import Form from './Form';

// var isLoggedIn = true;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form 
        isRegisteredRef={userIsRegistered}
      />
    </div>
  );
}

export default App;