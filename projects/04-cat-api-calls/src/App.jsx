import { useEffect, useState } from 'react'
import './App.css'
const CAT_FACT_API_URL = 'https://catfact.ninja/fact'
const CAT_IMAGE_API_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetch(CAT_FACT_API_URL)
      .then(res =>
        res.json()

      )
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const endpointImageApi = `${CAT_IMAGE_API_URL}/cat/says/${threeFirstWords}?json=true`

    fetch(endpointImageApi, { mode: 'no-cors' })
      .then(res => {
        console.log(res)
        if (!res.ok) {
          setError('API request error')
          return Promise.reject(new Error('error en respuesta', res.status))
        }
        res.json()
      }
      )
      .then(data => {
        const { url } = data
        setImage(url)
      })
      .catch(error => console.log(error))
  }, [fact, error])

  return (
    <main>
      <h1 style={{ fontFamily: 'cursive' }}>Cat Image App</h1>
      <p>{error}</p>
      {!error && fact && <p>{fact}</p>}
      {!error && image && <img src={`${CAT_IMAGE_API_URL}${image}`} alt={`Image of a cat using the three words of the cat fact: ${fact}`} />}

    </main>
  )
}
export default App
