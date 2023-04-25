const Dialog = ({winner, setBoard,setWinner, initialBoard}) => {
    const dialogHandler = () =>{
        setBoard(initialBoard)
        setWinner(false)
      }

    const dialogMessage = winner=='draw'?'Draw':'The winner is ' + winner
    return (
    <dialog open={winner??false}>
      <p>
        {dialogMessage}
        </p>
        <button onClick={dialogHandler}>Play Again!</button>
    </dialog>
  )
}
export default Dialog