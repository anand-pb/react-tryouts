import React from 'react';
import ReactDOM from 'react-dom';
import cars from './details';

const [honda, tesla] = cars;

// var hondaTopSpeed = honda.speedStats.topSpeed; 
// var hondaTopColour = honda.coloursByPopularity[0];

// var teslaTopSpeed = tesla.speedStats.topSpeed; 
// var teslaTopColour = tesla.coloursByPopularity[0];

const {coloursByPopularity : [hondaTopColour], speedStats : {topSpeed : hondaTopSpeed }} = honda;
const {coloursByPopularity : [teslaTopColour], speedStats : {topSpeed : teslaTopSpeed }} = tesla;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  </React.StrictMode>
);