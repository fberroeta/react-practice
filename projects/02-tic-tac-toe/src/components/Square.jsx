const Square = ({index,onChange,children}) => {
  
  const handleClick = ()=> {
    onChange(index)
  }
  
  return (
    
    <div className='board-square' onClick={handleClick}><span>{children}</span></div>
  )
}
export default Square