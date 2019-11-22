import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.navigationBox}>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </div>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder="search" />
      </div>
    </nav>
  );
};

export default Navbar;
