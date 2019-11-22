import React from 'react';
import styles from './TodoRow.module.scss';
import PropTypes from 'prop-types';
const TodoRow = ({ todoData, showTodo }) => {
  const handleShowTodo = () => {
    showTodo(todoData);
  };
  return (
    <div className={styles.TodoRow}>
      <div className={styles.cell}>
        <p>{todoData.id}</p>
      </div>
      <div className={styles.cell}>
        <p>{todoData.name}</p>
      </div>
      <div className={styles.cell}>
        <p onClick={handleShowTodo} className={styles.titleCell}>
          {todoData.title}
        </p>
      </div>
      <div className={styles.cell}>
        <p>{todoData.completed ? 'Completed' : 'False'}</p>
      </div>
    </div>
  );
};

TodoRow.propTypes = {
  todoData: PropTypes.object.isRequired,
  showTodo: PropTypes.func.isRequired
};

export default TodoRow;
