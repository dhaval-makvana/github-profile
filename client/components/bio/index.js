import React from 'react';
import styles from './index.module.scss';

const Bio = (props) => {
  // console.log("bio", props);
  const { avatar_url, name, login, company, email, bio, location } = props;
  return (
    <div className={styles.user}>
      <div className={styles.header}>
        <div className={styles.imageContainer}> 
          <img src={avatar_url} alt="avatar" />
        </div>
        <div className={styles.nameContainer}>
          <h3>{name}</h3>
          <h2>{login}</h2>
        </div>
      </div>

      <button className={styles.followButton}>Follow</button>

      <div className={styles.info}>
        <div>{bio}</div>
        <div>{company}</div>
        {/* <div>{location}</div> */}
        {email && <div>{email}</div>}
      </div>

    </div>
  )
}

export default Bio;