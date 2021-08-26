import ModalElement from "../UI/ModalElement";


const GameOverModal = (props) => {
    return(
        <ModalElement onClick={props.onNewGame}>
            <div>
                <p>Player 1: {props.player1score}</p>
                <p>Player 2: {props.player2score}</p>
            </div>
            <div>
                <button onClick={props.onNewGame}>Play Again</button>
            </div>
        </ModalElement>
    )
};

export default GameOverModal;