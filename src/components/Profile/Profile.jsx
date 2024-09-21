import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
