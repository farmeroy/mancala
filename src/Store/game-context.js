import React from 'react';

const GameContext = React.createContext({

        homePit1: 0,
        homePit2: 0,
        row1: [4, 4, 4, 4, 4, 4],
        row2: [4, 4, 4, 4, 4, 4],
        playerTurn: 1,
        moveStone: (id) => {},
        newGame: () => {}
});

export default GameContext;