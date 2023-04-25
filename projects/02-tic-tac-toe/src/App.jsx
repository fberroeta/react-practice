import { useState } from 'react';

import Square from './components/Square';
import Dialog from './components/Dialog';

import { checkWinner } from './service/checkWinner';

import './App.css';

function App() {
  //Board data array
  const initialBoard = new Array(9).fill(null)
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('X');
  const [winner,setWinner] = useState(null)
  
  const onBoardChange = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const winner = checkWinner(newBoard);
    if(winner){
      setWinner(winner)
    }else if(newBoard.every(value=>value!=null))
    {setWinner('draw')}
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <>
    <Dialog winner={winner} setBoard={setBoard} setWinner={setWinner} initialBoard={initialBoard}/>
    <section className="board">
      {board.map((square, index) => (
        <Square onChange={onBoardChange} key={index} index={index}>
          {square}
        </Square>
      ))}
    </section>
    </>
  );
}

export default App;
