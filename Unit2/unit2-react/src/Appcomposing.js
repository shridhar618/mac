import React, { Component } from "react";
import "./App.css";

/* Country Filter Component */
class CountryFilter extends Component {
  render() {
    return (
      <div>This is a placeholder for the country filter.</div>
    );
  }
}

/* Country Table Component */
class CountryTable extends Component {
  render() {
    return (
      <div>This is a placeholder for a table of countries.</div>
    );
  }
}

/* Country Add Component */
class CountryAdd extends Component {
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