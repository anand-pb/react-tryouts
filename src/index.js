import React from 'react';
import ReactDOM from 'react-dom';
import {add, subtract, multiply, dividedby} from './calc';
// import * as Calculator from './calc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>	//Calculator.add()
      <li>{subtract(2, 3)}</li>	 //Calculator.subtract()
      <li>{multiply(7, 2)}</li>  //Calculator.multiply()
      <li>{dividedby(5, 2)}</li>  //Calculator.dividedby()
    </ul>
  </div>
    // <App />

);