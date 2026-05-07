import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Greeting from './GreetingFn';  
// import App1 from './App';
import AppState from './App_State';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppState />
  </React.StrictMode>

  // <React.StrictMode>
  //   <Greeting name="Shridhar" />
  // </React.StrictMode>
);

reportWebVitals()