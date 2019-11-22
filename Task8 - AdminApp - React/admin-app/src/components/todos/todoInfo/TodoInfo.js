import React from 'react';
import styles from './TodoInfo.module.scss';
import PropTypes from 'prop-types';
const TodoInfo = ({ todo }) => {
  return (
    <div className={styles.TodoInfo}>
      <div className={styles.infoBox}>
        <h3>todo Info</h3>
        <div className={styles.textContainer}>
          <p className={styles.bolded}>UserId: </p>{' '}
          <p className={styles.information}>{todo.userId}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.bolded}>UserName: </p>{' '}
          <p className={styles.information}>{todo.name}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.bolded}>Id: </p>{' '}
          <p className={styles.information}> {todo.id}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.bolded}>title: </p>{' '}
          <p className={styles.information}>{todo.title}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.bolded}>Completed: </p>
          <p className={styles.information}>
            {todo.completed ? 'True' : 'False'}
          </p>
        </div>
      </div>
    </div>
  );
};

TodoInfo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoInfo;
