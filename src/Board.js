import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import tiles from './tiles';

class Board extends React.Component {
  render () {
    return (
      <HexGrid width={1200} height={700} viewBox="-50 -50 100 100">
        {/* Grid with manually inserted hexagons */}
        <Layout size={{ x: 5, y: 5 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {tiles.map((coords, i) => <Hexagon key={i} {...coords} fill={i % 2 === 0 ? "pat-1" : "pat-2"}/>)}
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
        <Pattern id="pat-1" link="http://www-users.cs.umn.edu/~interran/texture/pdir2.gif" />
        <Pattern id="pat-2" link="http://www-users.cs.umn.edu/~interran/texture/pdir1.gif" />
      </HexGrid>);
  }
}

export default Board;
