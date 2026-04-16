// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let a = 10, b = 20;

//   return (
//     <div className='App-header'> 
//       <h1>React is 30 times better than JSX</h1>
//       <ul>
//         <li>Apples</li>
//         <li>Bananas</li>
//         <li>Cherries</li>
//       </ul>

//       <p>End to the list</p>

//       <label>Event Name:</label>
//       <input type="text" id="event-name" className='color'/>

//       <h2>Sum is {a + b}</h2>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFn';

function App() {
  let a = 10, b = 20;

  return (
    <div className='App'>
      <Greeting name="Shridhar" />
      <Greeting name="Virat" />
      <Greeting name="Maxwell" />
    </div>
  );
}

export default App;