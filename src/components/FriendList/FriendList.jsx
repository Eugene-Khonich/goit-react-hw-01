import css from './FriendList.module.css';

const FriendList = friends => {
  return (
    <ul>
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

export default FriendList;
