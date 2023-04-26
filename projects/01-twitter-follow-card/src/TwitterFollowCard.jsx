import { useState } from 'react'

const TwitterFollowCard = ({ avatar, name, initialIsFollowing, nickname }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const avatarAlt = `Avatar de ${name}`
  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const nicknameFix = `@${nickname}`

  const buttonClass = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={avatar} alt={avatarAlt} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{nicknameFix}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClass}>{buttonText}</button>
      </aside>
    </article>
  )
}
export default TwitterFollowCard
