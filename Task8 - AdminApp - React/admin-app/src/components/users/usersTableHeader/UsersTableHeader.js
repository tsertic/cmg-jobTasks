import React from 'react';
import styles from './UsersTableHeader.module.scss';
import PropTypes from 'prop-types';
const UsersTableHeader = ({ sortList }) => {
  return (
    <div className={styles.tableHeader}>
      <h3 onClick={sortList.bind(this, 'id')} className={styles.title}>
        ID
      </h3>
      <h3 className={styles.title} onClick={sortList.bind(this, 'name')}>
        Name
      </h3>
      <h3 className={styles.title} onClick={sortList.bind(this, 'username')}>
        UserName
      </h3>
      <h3 className={styles.title} onClick={sortList.bind(this, 'email')}>
        Email
      </h3>
      <h3 className={styles.title}>Todos Count</h3>
    </div>
  );
};

UsersTableHeader.propTypes = {
  sortList: PropTypes.func.isRequired
};

export default UsersTableHeader;
