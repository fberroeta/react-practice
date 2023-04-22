import oliAvatar from './assets/avatarwoli.jpeg'
import './App.css'

function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className="tw-followCard-avatar" src={oliAvatar} alt="" />
      <div className='tw-followCard-info'>
        <strong>Olivia Berroeta Chandía</strong>
        <span className='tw-followCard-infoUserName'>@oliuwu</span>
      </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
    )
}

export default App
