import React from 'react';
import styles from './Backdrop.module.scss';
import PropTypes from 'prop-types';

const Backdrop = ({ action }) => {
  return <div className={styles.Backdrop} onClick={action}></div>;
};

Backdrop.propTypes = {
  action: PropTypes.func.isRequired
};

export default Backdrop;
