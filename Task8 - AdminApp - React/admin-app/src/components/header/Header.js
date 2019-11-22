import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
//components
import Navbar from '../navbar/Navbar';
const Header = ({ title, logOut }) => {
  const handleLogOut = () => {
    logOut(null);
  };
  return (
    <header className={styles.Header}>
      <div className={styles.upperNavigation}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.link} onClick={handleLogOut}>
          Sing Out
        </p>
      </div>
      <Navbar />
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  logOut: PropTypes.func.isRequired
};
export default Header;
