import Board from './components/Board';
import './App.css';
import GameProvider from './Store/GameProvider';

function App() {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
}

export default App;
