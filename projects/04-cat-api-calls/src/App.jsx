import { useEffect, useState } from 'react'
import './App.css'
const CAT_FACT_API_URL = 'https://catfact.ninja/fact'
const CAT_IMAGE_API_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(CAT_FACT_API_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')

        const endpointImageApi = `${CAT_IMAGE_API_URL}/cat/says/${threeFirstWords}?json=true`

        fetch(endpointImageApi)
          .then(res => res.json())
          .then(data => {
            const { url } = data
            setImage(url)
          })
      })
  }, [])

  return (
    <main>
      <h1 style={{ fontFamily: 'cursive' }}>Cat Image App</h1>

      {fact && <p>{fact}</p>}
      <img src={`${CAT_IMAGE_API_URL}${image}`} alt={`Image of a cat usin g the three words of the cat fact ${fact}`} />

    </main>
  )
}
export default App
