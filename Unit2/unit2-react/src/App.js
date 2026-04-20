import React from 'react';
import './App.css';
import Greeting from './GreetingFn';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Greeting name="Shridhar" />
      <Greeting name="Virat" />
      <Greeting name="Maxwell" />
    </div>
  );
}

export default App;