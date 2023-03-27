import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import contacts from './contacts';

// function Card(props) {
//   return (
//     <div className='card'> 
//       <h2>{props.name}</h2>
//       <img src={props.imgsrc} alt={props.name}/>
//       <p>{props.work}</p>
//       <p>{props.concept}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);