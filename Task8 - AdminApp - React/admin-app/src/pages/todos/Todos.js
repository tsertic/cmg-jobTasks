import React from 'react';
import styles from './Todos.module.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
//components
import Header from '../../components/header/Header';
import TodosTableHeader from '../../components/todos/todosTableHeader/TodosTableHeader';
import TodoRow from '../../components/todos/todoRow/TodoRow';
import TodoInfo from '../../components/todos/todoInfo/TodoInfo';
import Modal from '../../components/modal/Modal';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      users: [],
      selectedTodo: null,
      showModal: false,
      sortType: true
    };
  }

  componentDidMount() {
    let todosUrl = '';
    const userId = this.props.match.params.userId;
    //if there are no params it will use link for all todos
    if (this.props.match.params.userId) {
      todosUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    } else {
      todosUrl = `https://jsonplaceholder.typicode.com/todos`;
    }
    axios
      .all([
        axios.get(todosUrl),
        axios.get('https://jsonplaceholder.typicode.com/users')
      ])
      .then(
        axios.spread((todosRes, userRes) => {
          this.setState({ todos: todosRes.data, users: userRes.data });
        })
      );
  }

  toggleModal = () => {
    this.setState(ps => {
      return { showModal: !ps.showModal };
    });
  };

  showTodoData = todo => {
    this.setState({ showModal: true, selectedTodo: todo });
  };

  sortList = name => {
    const { sortType, todos } = this.state;
    let sortedList = todos.sort((a, b) => {
      const isReversed = sortType === true ? 1 : -1;
      switch (name) {
        case 'id':
          return isReversed * b.id - a.id;
        case 'name':
          return isReversed * b.userId - a.userId;
        case 'title':
          return isReversed * b.title.localeCompare(a.title);
        case 'completed':
          return (
            isReversed * String(b.completed).localeCompare(String(a.completed))
          );

        default:
          return null;
      }
    });
    this.setState(preState => ({
      sortType: !preState.sortType,
      todos: sortedList
    }));
  };

  render() {
    const { todos, users, showModal, selectedTodo } = this.state;

    const renderTodos = todos.map(todo => {
      const name = users.filter(n => n.id === todo.userId);
      const displayInRow = {
        ...todo,
        name: name[0].name
      };
      return (
        <TodoRow
          todoData={displayInRow}
          showTodo={this.showTodoData}
          key={todo.id}
        />
      );
    });

    return (
      <div className={styles.Users}>
        {showModal && (
          <Modal show={showModal} toggleModal={this.toggleModal}>
            <TodoInfo todo={selectedTodo} />
          </Modal>
        )}
        <Header title="Todos" logOut={this.props.logOut} />
        <div className={styles.table}>
          <TodosTableHeader sortList={this.sortList} />
          <div className={styles.tableContent}>{renderTodos}</div>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  history: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
};

export default Todos;
