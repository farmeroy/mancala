import React, { useContext, useState } from "react";
import GameContext from "../../Store/game-context";
import RulesModal from "../Game-Rules/RulesModal";
import styles from './Header.module.css';

const Header = () => {
  const gameCtx = useContext(GameContext);
  const [showGameRules, setShowGameRules] = useState(false);
  const showGameRulesHandler = () => {
   setShowGameRules(prevState => !prevState)};
  const newGameHandler = () => {
    gameCtx.newGame();
  };
  return (
    <header className={styles.header}>
      {showGameRules && <RulesModal onCloseModal={showGameRulesHandler}/>}
      <h1>Mancala</h1>
      <div>
      <button onClick={newGameHandler}>Start Over</button>
      <button onClick={showGameRulesHandler}>How to Play</button>

      </div>
    </header>
  );
};

export default Header;
