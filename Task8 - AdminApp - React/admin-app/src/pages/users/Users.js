import React from 'react';
import styles from './Users.module.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
//components
import Header from '../../components/header/Header';
import UserInfo from '../../components/users/userInfo/UserInfo';
import UsersRow from '../../components/users/usersRow/UsersRow';
import Modal from '../../components/modal/Modal';
import UsersTableHeader from '../../components/users/usersTableHeader/UsersTableHeader';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sortType: true,
      showModal: false,
      selectedUser: null
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/users')
      ])
      .then(
        axios.spread((todosRes, userRes) => {
          //extracting todos count for each user and puting in users array
          const userArray = userRes.data.map(user => {
            let todoCount = 0;
            todosRes.data.map(el => {
              if (el.userId === user.id) {
                todoCount++;
              }
              return null;
            });
            return { ...user, todoCount: todoCount };
          });

          this.setState({ users: userArray });
        })
      );
  }

  toggleModal = () => {
    this.setState(ps => {
      return { showModal: !ps.showModal };
    });
  };

  showUserData = user => {
    this.setState({ showModal: true, selectedUser: user });
  };

  sortList = name => {
    const { sortType, users } = this.state;
    let sortedList = [...users];
    sortedList = users.sort((a, b) => {
      const isReversed = sortType === true ? 1 : -1;
      switch (name) {
        case 'id':
          return isReversed * b.id - a.id;
        case 'name':
          return isReversed * b.name.localeCompare(a.name);
        case 'username':
          return isReversed * b.username.localeCompare(a.username);
        case 'email':
          return isReversed * b.email.localeCompare(a.email);
        default:
          return null;
      }
    });
    this.setState(preState => ({
      sortType: !preState.sortType,
      users: sortedList
    }));
  };

  render() {
    const { showModal, selectedUser, users } = this.state;

    const renderUsers = users.map(user => {
      const displayUser = { ...user };
      return (
        <UsersRow
          userData={displayUser}
          key={user.id}
          showUser={this.showUserData}
        />
      );
    });

    return (
      <div className={styles.Users}>
        {showModal && (
          <Modal show={showModal} toggleModal={this.toggleModal}>
            <UserInfo user={selectedUser} />
          </Modal>
        )}

        <Header title="Users" logOut={this.props.logOut} />

        <div className={styles.table}>
          <UsersTableHeader sortList={this.sortList} />
          <div className={styles.tableContent}>{renderUsers}</div>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default Users;
