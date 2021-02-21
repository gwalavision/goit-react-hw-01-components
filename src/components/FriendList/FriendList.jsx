import PropTypes from 'prop-types'

import FriendsListItem from './FriendListItem'

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
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