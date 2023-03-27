import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", "Banana", "Coconut", ...citrus];

// console.log(fruits);

// const fullName = {
//   fName: "Johann",
//   lName: "Kepler"
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jkepler"
// };

// console.log(user);