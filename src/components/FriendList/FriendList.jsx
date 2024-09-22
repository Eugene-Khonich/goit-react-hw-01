import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(item => {
        return (
          <li className={css.listItem} key={item.id}>
            <FriendListItem
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
