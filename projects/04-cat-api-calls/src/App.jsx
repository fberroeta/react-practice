import './App.css'

import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

const App = () => {
  const { fact, refreshFact } = useCatFact()

  const { imgUrl } = useCatImage({ fact })

  return (
    <main>
      <button onClick={refreshFact}>Get new fact</button>
      <h1 style={{ fontFamily: 'cursive' }}>Cat Image App</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt='Image of a cat using the three words from a cat fact' />}

    </main>
  )
}
export default App
