import React, { useContext } from "react";
import GameContext from "../Store/game-context";
import styles from "./HomePit.module.css";
import Stone from "./Stone.js";

function HomePit(props) {
    const gameCtx = useContext(GameContext);
    
    // let stonesEl = [];
    // for(let i = gameCtx[`homePit${props.player}`]; i > 0; i--) {
    //     stonesEl.push(
    //         <Stone key={`HomePit-${i}`}/>
    //     )
    // };
  return (
    <div key={props.player} className={styles.pit}>
      {gameCtx[props.player]}
    </div>
  );
}

export default HomePit;
