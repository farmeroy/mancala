import GameContext from "./game-context";
import { useReducer } from "react";

const defaultGameState = {
  homePit1: 0,
  homePit2: 0,
  row1: [4, 4, 4, 4, 4, 4],
  row2: [4, 4, 4, 4, 4, 4],
};

const gameReducer = (state, action) => {
  if (action.type === "MOVE") {
    // const stones = state[`row${action.row}[${action.pit}]`];
    let homePits = [state.homePit1, state.homePit2]
    let rows = [[...state.row1], [...state.row2]];
    let row = +action.row;
    const player = +action.row;
    // console.log(player);
    let pit = action.pit;
    let points = 0;
    let stones = rows[row-1][pit];
    rows[row-1][pit] = 0;
    for (let i = stones; i > 0; i--) {
      if (pit + 1 < 6) {
        pit++;
        rows[row-1][pit]++;
        continue;
      } else if (player === row) {
        // console.log(currBoardState[`homePit${player}`]);
        console.log(player);
        homePits[player-1]++
        player === 1 ? (row = 2) : (row = 1);
        pit = -1;
        continue;
      } else if (player !== row) {
        player === 1 ? (row = 1) : (row = 2);
        rows[row-1][0]++;
        pit = 0;
        continue;
      }
    }
    return { 
      homePit1: homePits[0],
      homePit2: homePits[1],
      row1: [...rows[0]],
      row2: [...rows[1]]
    };
  }

  // return defaultGameState;
};

const GameProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  const moveStoneHandler = (id) => {
    dispatchGameAction({
      type: "MOVE",
      row: id.row,
      pit: id.pit,
    });
  };

  const gameContext = {
    homePit1: gameState.homePit1,
    homePit2: gameState.homePit2,
    row1: gameState.row1,
    row2: gameState.row2,
    moveStone: moveStoneHandler,
  };
  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
