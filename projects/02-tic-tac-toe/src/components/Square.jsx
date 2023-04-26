const Square = ({ index, onChange, children, winner }) => {
  const handleClick = () => {
    winner ?? onChange(index)
  }

  return (
    <div className='board-square' onClick={handleClick}><span>{children}</span></div>
  )
}
export default Square
