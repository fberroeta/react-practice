
const Square = ({index,onChange,children}) => {
  const handleClick = ()=> {
    onChange(index)
  }
  
  return (
    
    <div className='board-square' onClick={handleClick}>{children}</div>
  )
}
export default Square