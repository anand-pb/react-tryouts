import React from 'react';
import ReactDOM from 'react-dom';

var yourname = "anandpb";
const today = new Date();
var currentyear = today.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourname}</p>
    <p>Copyright {currentyear}</p>
  </div>,
  document.getElementById('root')
);