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
    const currBoardState = { ...state };
    console.log(currBoardState);
    console.log(action);
    let row = +action.row;
    const player = +action.row;
    // console.log(player);
    let pit = action.pit;
    let points = 0;
    let stones = currBoardState[`row${row}`][pit];
    currBoardState[`row${row}`][pit] = 0;
    for (let i = stones; i > 0; i--) {
      if (pit + 1 < 6) {
        pit++;
        currBoardState[`row${row}`][pit]++;
        continue;
      } else if (player === row) {
        // console.log(currBoardState[`homePit${player}`]);
        console.log(player);
        points++;
        player === 1 ? (row = 2) : (row = 1);
        pit = -1;
        continue;
      } else if (player !== row) {
        player === 1 ? (row = 1) : (row = 2);
        currBoardState[`row${row}`][0]++;
        pit = 0;
        continue;
      }
    }
    let updatedState = { ...currBoardState };
    updatedState[`homePit${player}`] += points;
    console.log(updatedState);
    return { ...updatedState };
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
