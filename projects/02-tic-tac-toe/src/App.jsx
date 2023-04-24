import './App.css'
import Square from './components/Square'

function App() {
//Board data array
const boardData = new Array(9).fill(null)

  return (
    <section className='board'>
     {boardData.map((square,index)=><Square key={index}>
      {square}
     </Square>)}
    </section>
  )
}

export default App
