import React from "react";
import styles from "./HomePit.module.css";
import Stone from "./Stone.js";

function HomePit(props) {
   
    let stonesEl = [];
    for(let i = props.stones; i > 0; i--) {
        stonesEl.push(
            <Stone key={`HomePit-${i}`}/>
        )
    };
  return (
    <div key={props.player} className={styles.pit}>
      {stonesEl}
    </div>
  );
}

export default HomePit;
