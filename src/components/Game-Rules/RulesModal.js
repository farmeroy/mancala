import ModalElement from "../UI/ModalElement";
import styles from "./RulesModal.module.css";

const RulesModal = (props) => {
  return (
    <ModalElement onClick={props.onCloseModal}>
      <div className={styles.rules}>
        <h2>How to Play Mancala</h2>
        
          <p>
            Each turn, the current player picks up all of the stones from one of
            the pits on their side. Moving counter-clockwise, the player
            deposits one of the stones in each pit until the stones run out.
          </p>
          <p>
            If the last stone you drop is in your own store, take another turn.
          </p>
          <p>
            If the last stone you drop is in an empty hole on your side, you
            capture that stone and all stones in the hole directly opposite.
            Place all captured stones in your store.
          </p>

        <h2>Winning the Game</h2>
        
          <p>
            The game ends when all six spaces on one side of the board are
            empty. The player who still has pieces on his side of the board when
            the game ends captures all of those pieces. Count all the pieces in
            each store. The winner is the player with the most pieces.
          </p>
        
        <button onClick={props.onCloseModal}>Resume Game</button>
      </div>
    </ModalElement>
  );
};

export default RulesModal;
