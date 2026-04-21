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



// import React, { Component } from 'react';
// import './App.css';
// import Greeting from './components/Greeting';

// class App extends Component {
//   render() {
//     const continents = [
//       'Asia',
//       'Africa',
//       'Europe',
//       'North America',
//       'South America',
//       'Australia',
//       'Antarctica',
//     ];

//     const helloContinent = continents.map((c, index) => (
//       <h1 key={index}>Hello {c}</h1>
//     ));

//     return (
//       <>
//       {helloContinent}
//       </>
//     );
//   }
// }

// export default App;




import './App.css';
import React from "react";

/* Country Filter Component */
class CountryFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the country filter.</div>
    );
  }
}

/* Country Table Component */
class CountryTable extends React.Component {
  render() {
    return (
      <div>This is a placeholder for a table of countries.</div>
    );
  }
}

/* Country Add Component */
class CountryAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for a form to add a country.</div>
    );
  }
}

/* Main App Component */
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <React.Fragment>
          <h1>Country Tracker</h1>

          <CountryFilter />
          <hr />

          <CountryTable />
          <hr />

          <CountryAdd />
        </React.Fragment>
     </div>
  );
}

export default App;