import React from 'react';
import ReactDOM from 'react-dom';

var mcustomStyle = {
  color: "lightblue"
}

var acustomStyle = {
  color: "lightgreen"
}

var ecustomStyle = {
  color: "darkgray"
}

var colorobj = {}
var greeting = ""

var randnum = Math.floor(Math.random() * 24);
var today = new Date(1, 1, 1, randnum);

var hour = today.getHours();

if (hour >= 0 && hour < 12) {
  colorobj = mcustomStyle;
  greeting = "Good morning"
} else if (hour >= 12 && hour < 18) {
  colorobj = acustomStyle;
  greeting = "Good afternoon"
} else {
  colorobj = ecustomStyle;
  greeting = "Good evening"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="heading" style={colorobj}>{greeting}</h1>
    <p>{randnum} : 00</p>
  </div>
);