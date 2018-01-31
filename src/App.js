import { Client } from 'boardgame.io/client';
import { Game } from 'boardgame.io/core';
import Board from './Board';
import PlayerMat from './PlayerMat';
import React from 'react';

class TicTacToeBoard extends React.Component {
  onClick(id) {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
      this.props.events.endTurn();
    }
  }

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {
    return (
      <div className="App">
        <Board />
        <PlayerMat />
      </div>
    );
  }
}

const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      console.log(G)
      let cells = [...G.cells]; // don't mutate original state.
      cells[id] = ctx.currentPlayer;
      return { ...G, cells }; // don't mutate original state.
    },
  },
});

const App = Client({ game: TicTacToe, board: TicTacToeBoard });

export default App;
