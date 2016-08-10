import React, { Component } from 'react';

class MazeTile extends Component {
  render() {
    return (
      <svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="120" height="120" stroke="black" fill="transparent" stroke-width="1" />
    </svg>
    )
  }
}

export default MazeTile;
