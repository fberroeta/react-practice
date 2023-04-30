import './App.css'

function App () {
  return (
    <siv className='page'>
      <header>
        <h1>Movie Search</h1>
        <form action='submit' className='form'>
          <input type='text' placeholder='Avengers, Star Wars, Batman, Rocky ...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <p>Aca van las peliculas</p>
      </main>
    </siv>
  )
}

export default App
