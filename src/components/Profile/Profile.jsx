import PropTypes from 'prop-types'
import styles from './Profile.module.css'

function Profile({ avatar, name, tag, location, stats }) {
    return (
<div className={styles.container}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
        <p className="name">{name}</p>
        <p className="tag">&#64;{tag}</p>
    <p className="location">{location}</p>
        </div>
        
  <ul className={styles.statsContainer}>
    <li className={styles.item}>
      <span className="label">{'Followers'} </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={styles.item}>
      <span className="label">{'Views'} </span>
          <span className="quantity">{stats.views}</span>
    </li>
    <li className={styles.item}>
      <span className="label">{'Likes'} </span>
          <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
      </div>
      
  )
}


Profile.defaultProps = {
  avatar: 'No Image',
  stats: 0
}

    
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  }

export default Profile