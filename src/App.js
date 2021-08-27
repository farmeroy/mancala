
import Board from './components/GameBoard/Board';
import './App.css';
import GameProvider from './Store/GameProvider';
import Header from './components/GameBoard/Header';

function App() {


  return (
    <GameProvider>
      <Header></Header>
      <Board />
    </GameProvider>
  );
}

export default App;
