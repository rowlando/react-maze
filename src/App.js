import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createMaze from './Maze';

class App extends Component {
  render() {

    const Maze = createMaze(React);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Maze size={10}/>

      </div>
    );
  }
}

export default App;
