import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        accept: 'application/json',
        'X-RapidAPI-Key': '2acd18e3cbmsh90a9c641290a3dap17e1dajsndac80490fb1b',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
      }
    }

    fetch(url, options).then(result => result.json()).then(data => console.log(data.value))
  }, [])

  return (
    <div>Hola mundo</div>
  )
}
export default App
