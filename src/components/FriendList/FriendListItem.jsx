import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

export default function FriendsListItem({ avatar, name, isonline }) {

    const colorIndicator = isonline ? styles.online : styles.offline
    
    return (
        <li className={styles.item}>
            <span className={colorIndicator}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" /> 
            <p className="name">{name}</p>
        </li>
    )
}

FriendsListItem.defaultProps = {
    avatar: 'Random "No Image" image'
}

FriendsListItem.propTypes = {
    name: PropTypes.string.isRequired,
}

