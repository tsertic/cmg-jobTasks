import React, { Component } from 'react';
import styles from './Login.module.scss';
import PropTypes from 'prop-types';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMsg: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email !== 'test@test.com' && password !== '123456') {
      this.setState({
        errorMsg: 'incorrect email or password',
        email: '',
        password: ''
      });
      return;
    }
    const user = {
      email: this.state.email
    };
    this.props.logIn(user);

    this.setState(() => {
      return { email: '', password: '', errorMsg: '' };
    });
  };

  render() {
    const { email, password, errorMsg } = this.state;
    return (
      <div className={styles.Login}>
        <p className={styles.errorMsg}>{errorMsg}</p>
        <form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <h3 className={styles.title}>LOGIN</h3>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <button>SIGN IN</button>
        </form>
        <p className={styles.infoMessage}>
          Hardcoded user email: test@test.com , password:123456
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired
};

export default Login;
