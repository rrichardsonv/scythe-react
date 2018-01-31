import React, { Component } from 'react';

class PlayerMat extends Component {
  render() {
    return(
      <div style={{position: 'fixed',
    height: '20vh',
    width: '100vw',
    bottom: 0,
    backgroundColor: '#ccc'}}className="playerMat">
        <div style={{padding: "0 8px"}}>
          <h1>PlayerMat</h1>
        </div>
      </div>
    );
  }
}

export default PlayerMat;
