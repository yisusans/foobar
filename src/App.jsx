import React from 'react';
import logo from './logo.svg';
import './App.css';

export const foo = {
  1: 'one',
  2: '123',
  3: '1231231312',
  4: 'asdfasdf',
  123123: '123',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
