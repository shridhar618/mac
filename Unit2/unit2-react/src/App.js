// import React from 'react';
// import './App.css';
// import Greeting from './GreetingFn';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <Greeting name="Shridhar" />
//       <Greeting name="Virat" />
//       <Greeting name="Maxwell" />
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    const continents = [
      'Asia',
      'Africa',
      'Europe',
      'North America',
      'South America',
      'Australia',
      'Antarctica',
    ];

    const helloContinent = continents.map((c, index) => (
      <h1 key={index}>Hello {c}</h1>
    ));

    return (
      <>
      {helloContinent}
      </>
    );
  }
}

export default App;