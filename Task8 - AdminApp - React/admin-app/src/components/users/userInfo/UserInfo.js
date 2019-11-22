import React from 'react';
import styles from './UserInfo.module.scss';
import PropTypes from 'prop-types';
const UserInfo = ({ user }) => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.infoBox}>
        <h3>User Info</h3>
        <p>
          <span className={styles.bolded}>Name: </span> {user.name}
        </p>
        <p>
          <span className={styles.bolded}>username: </span> {user.username}
        </p>
        <p>
          <span className={styles.bolded}>email: </span> {user.email}
        </p>
        <p>
          <span className={styles.bolded}>phone: </span> {user.phone}
        </p>
        <p>
          <span className={styles.bolded}>website: </span> {user.website}
        </p>
      </div>
      <div className={styles.infoBox}>
        <h3>Address</h3>
        <p>
          <span className={styles.bolded}>Street: </span> {user.address.street}
        </p>
        <p>
          <span className={styles.bolded}>Suit: </span> {user.address.suite}
        </p>
        <p>
          <span className={styles.bolded}>City: </span> {user.address.city}
        </p>
        <p>
          <span className={styles.bolded}>zipcode: </span>
          {user.address.zipcode}
        </p>
      </div>

      <div className={styles.infoBox}>
        <h3>Company</h3>
        <p>
          <span className={styles.bolded}>name: </span>
          {user.company.name}
        </p>
        <p>
          <span className={styles.bolded}>catch phrase: </span>
          {user.company.catchPhrase}
        </p>
        <p>
          <span className={styles.bolded}>bs: </span>
          {user.company.bs}
        </p>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserInfo;
