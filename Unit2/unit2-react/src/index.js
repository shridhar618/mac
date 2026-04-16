import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myElement = <h1>I like JSX!</h1>;  // ✅ declare first

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);  // ✅ now it's safe

reportWebVitals();