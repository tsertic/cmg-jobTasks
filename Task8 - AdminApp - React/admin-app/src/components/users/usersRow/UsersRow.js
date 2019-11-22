import React from 'react';
import styles from './UsersRow.module.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
const UsersRow = props => {
  const { userData, showUser, history } = props;

  const handleShowUser = () => {
    showUser(userData);
  };
  const handleRedirect = () => {
    history.push(`/todos/${userData.id}`);
  };
  return (
    <div className={styles.UsersRow}>
      <div className={styles.cell}>
        <p>{userData.id}</p>
      </div>
      <div className={styles.cell}>
        <p onClick={handleShowUser} className={styles.clickableCell}>
          {userData.name}
        </p>
      </div>
      <div className={styles.cell}>
        <p>{userData.username}</p>
      </div>
      <div className={styles.cell}>
        <p>{userData.email}</p>
      </div>
      <div className={styles.cell}>
        <p onClick={handleRedirect} className={styles.clickableCell}>
          {userData.todoCount}
        </p>
      </div>
    </div>
  );
};

UsersRow.propTypes = {
  userData: PropTypes.object.isRequired,
  showUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(UsersRow);
