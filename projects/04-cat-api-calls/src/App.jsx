import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from '../services/facts'
import { useCatImage } from '../hooks/useCatImage'

const CAT_IMAGE_API_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState()
  const { imgUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }
  return (
    <main>
      <button onClick={handleClick}>Get new fact</button>
      <h1 style={{ fontFamily: 'cursive' }}>Cat Image App</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={`${CAT_IMAGE_API_URL}${imgUrl}`} alt={`Image of a cat using the three words of the cat fact: ${fact}`} />}

    </main>
  )
}
export default App
