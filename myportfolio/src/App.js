import React from 'react';
import ReactDOM from 'react-dom';

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

const myfirstelement = <h1>Hello Root1!</h1>
const mysecondelement = <h1>Hello Root2!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(mysecondelement, document.getElementById('root2'));

/*function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}*/

//export default App;
