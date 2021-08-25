import React, { useContext} from "react";
import HomePit from "./HomePit";
import Row from "./Row";
import styles from './Board.module.css';
import GameContext from "../Store/game-context";


function Board() {
    const gameCtx = useContext(GameContext);
   
  return (
    <div className={styles.board}>
        <div className={styles.field}>
      <HomePit key={1} stones={gameCtx.homePit1} />
      <section>
        <Row stones={gameCtx.row1} row={1} />
        <Row stones={gameCtx.row2} row={2}/>
      </section>
      <HomePit key={2} stones={gameCtx.homePit2}/>

        </div>
    </div>
  );
}

export default Board;
