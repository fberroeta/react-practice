import {useState} from 'react'
import './App.css'
import Square from './components/Square'

function App() {
//Board data array
const [board, setBoard] = useState(new Array(9).fill(null))
const [turn,setTurn] = useState('X')

const onBoardChange = (index) =>{
  const newArray = [...board]  
  newArray[index] = turn
  setBoard(newArray)
  setTurn(turn==='X'?'O':'X')
}

  return (
    <section className='board'>
     {
     board.map((square,index)=><Square onChange={onBoardChange} key={index} index={index}>{square}</Square>)
     }
    </section>
  )
}

export default App
