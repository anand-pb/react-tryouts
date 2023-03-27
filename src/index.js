import React from 'react';
import ReactDOM from 'react-dom';
import pi, {doublePi, halfPi} from './math';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{halfPi()}</li>
    </ul>
  </div>
    // <App />
);