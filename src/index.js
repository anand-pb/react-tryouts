import React from 'react';
import ReactDOM from 'react-dom';
import {add, subtract, multiply, dividedby} from './calc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{subtract(2, 3)}</li>
      <li>{multiply(7, 2)}</li>
      <li>{dividedby(5, 2)}</li>
    </ul>
  </div>
    // <App />

);