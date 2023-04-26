import { useState } from 'react'

import Square from './components/Square'
import Dialog from './components/Dialog'

import { checkWinner } from './service/checkWinner'

import './App.css'

function App () {
  const [board, setBoard] = useState(() => {
    // Read data from the storage if exists or use an empty board
    const localBoard = window.localStorage.getItem('board')
    const initialBoard = localBoard
      ? JSON.parse(localBoard)
      : new Array(9).fill(null)
    return initialBoard
  })
  const [turn, setTurn] = useState(() => {
    // Turn data from storage
    const localTurn = window.localStorage.getItem('turn')
    const initialTurn = localTurn || 'X'
    return initialTurn
  })

  const initialWinner = null
  const [winner, setWinner] = useState(initialWinner)

  // Game logic
  const resetGame = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    setBoard(() => new Array(9).fill(null))
    setWinner(() => null)
    setTurn(() => 'X')
  }

  const onBoardChange = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const winner = checkWinner(newBoard)
    if (winner) {
      setWinner(winner)
    } else if (newBoard.every((value) => value != null)) {
      setWinner('draw')
    }

    // Cambio de turno// Turn shift
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)

    // TODO: Save game in localstorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
  }

  return (
    <>
      <Dialog winner={winner} resetGame={resetGame} />
      <h1>Tic Tac Toe</h1>
      <section className='board'>
        {board.map((square, index) => (
          <Square
            winner={winner}
            onChange={onBoardChange}
            key={index}
            index={index}
          >
            {square}
          </Square>
        ))}
      </section>
      <section className='turn-section'>
        <span className='turn-text'>Turn: {turn}</span>
      </section>
    </>
  )
}

export default App
