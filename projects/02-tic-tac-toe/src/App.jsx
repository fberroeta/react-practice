import { useState } from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  //Board data array
  const initialBoard = new Array(9).fill(null)
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('X');
  const [winner,setWinner] = useState(null)
  const checkWinner = (boardToCheck) => {
    console.log(boardToCheck)
    const WINNER_COMBOS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        //return X or O value
        return boardToCheck[a];
      }
    }
  };

  const onBoardChange = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const winner = checkWinner(newBoard);
    if(winner){
      setWinner(winner)
      
      console.log('el ganador es ' + winner);
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const dialogHandler = () =>{
    setBoard(initialBoard)
    setWinner(false)
  }
  return (
    <>
    <dialog open={winner??false}>
      <p>
        The winner is {winner}
        </p>
        <button onClick={dialogHandler}>Play Again!</button>
    </dialog>
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
