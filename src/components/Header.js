import React, { useContext } from "react";
import GameContext from "../Store/game-context";
import styles from './Header.module.css';

const Header = () => {
  const gameCtx = useContext(GameContext);
  const newGameHandler = () => {
    gameCtx.newGame();
  };
  return (
    <header className={styles.header}>
      <h2>Mancala</h2>
      <button onClick={newGameHandler}>Start Over</button>
    </header>
  );
};

export default Header;
