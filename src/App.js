
import Board from './components/Board';
import './App.css';
import GameProvider from './Store/GameProvider';
import Header from './components/Header';

function App() {


  return (
    <GameProvider>
      <Header></Header>
      <Board />
    </GameProvider>
  );
}

export default App;
