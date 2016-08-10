import React, { Component } from 'react';
import './App.css';
import createMaze from './Maze';

class App extends Component {
  render() {

    const Maze = createMaze(React);

    return (
      <div className="App">

        <Maze size={10}/>

      </div>
    );
  }
}

export default App;
