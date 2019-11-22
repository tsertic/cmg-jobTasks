import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Login from './pages/login/Login';
import Users from './pages/users/Users';
import Todos from './pages/todos/Todos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  handleLogIn = user => {
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentUser ? (
          <Redirect to="/users" />
        ) : (
          <Redirect to="/" />
        )}
        <Route
          exact
          path="/"
          render={() => <Login logIn={this.handleLogIn} />}
        />

        <Route
          path="/users"
          render={() => <Users logOut={this.handleLogIn} />}
        />
        <Route
          exact
          path="/todos"
          render={props => <Todos {...props} logOut={this.handleLogIn} />}
        />

        <Route
          exact
          path="/todos/:userId"
          render={props => <Todos {...props} logOut={this.handleLogIn} />}
        />
      </div>
    );
  }
}

export default App;
