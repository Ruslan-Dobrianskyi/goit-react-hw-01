import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={ s.avatar } src={image} alt="User avatar" />
      <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.text}>Followers</span>
          <span className={s.number}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Views</span>
          <span className={s.number}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Likes</span>
          <span className={s.number} >{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
