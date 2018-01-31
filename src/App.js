import { Client } from 'boardgame.io/client';
import { Game } from 'boardgame.io/core';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import someshit from './someshit.js';
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
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 5, y: 5 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
            {someshit.map((coords) => <Hexagon q={coords[0]} r={coords[2]} s={coords[1]} />)}
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
          <Pattern id="pat-1" link="http://www-users.cs.umn.edu/~interran/texture/pdir2.gif" />
          <Pattern id="pat-2" link="http://www-users.cs.umn.edu/~interran/texture/pdir2.gif" />
        </HexGrid>
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
