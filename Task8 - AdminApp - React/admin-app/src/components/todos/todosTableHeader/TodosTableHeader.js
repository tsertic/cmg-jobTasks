import React from 'react';
import styles from './TodosTableHeader.module.scss';
import PropTypes from 'prop-types';
const TodosTableHeader = ({ sortList }) => {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.title}>
        <h3 onClick={sortList.bind(this, 'id')}>Id</h3>
      </div>
      <div className={styles.title}>
        <h3 onClick={sortList.bind(this, 'name')}>Name</h3>
      </div>
      <div className={styles.title}>
        <h3 onClick={sortList.bind(this, 'title')}>Todos Title</h3>
      </div>
      <div className={styles.title}>
        <h3 onClick={sortList.bind(this, 'completed')}>Complete/False</h3>
      </div>
    </div>
  );
};

TodosTableHeader.propTypes = {
  sortList: PropTypes.func.isRequired
};

export default TodosTableHeader;
