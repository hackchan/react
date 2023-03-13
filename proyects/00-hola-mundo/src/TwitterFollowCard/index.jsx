import { useState } from 'react'
import '../css/styles.css'
export const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'fw-followCard-button  is-following' : 'fw-followCard-button'
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='fw-followCard'>
      <header className='fw-followCard-header'>
        <img
          className='fw-followCard-avatar'
          src={`https://unavatar.io/${userName}`} alt=''
        />
        <div className='fw-followCard-info'>
          <strong>{children}</strong>
          <span className='fw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>

          <span className='fw-followCard-text'>{text}</span>
          <span className='fw-followCard-stopFollow'>Dejar de Seguir</span>
        </button>
      </aside>

    </article>
  )
}
