import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const x = 5;
let text = "Good Bye";

if (x < 10) {
  text = "Hello from react";
}

const myElement2 = <h1>{text}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement2);

reportWebVitals();