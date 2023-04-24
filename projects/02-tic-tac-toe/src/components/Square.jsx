
const Square = ({index,onChange}) => {
  const handleClick = ()=> {
    onChange(index)
  }
  
  return (
    
    <div className='board-square' onClick={handleClick}>{index}</div>
  )
}
export default Square