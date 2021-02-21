import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

import FriendsListItem from './FriendListItem'

function FriendList({ friends }) {
    return (
        <ul className={styles.container}>
            {
                friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsListItem
                avatar={avatar}
                isonline={isOnline}
                key={id}
                name={name}       
                />
                ))
            }

        </ul>
    )
}

export default FriendList