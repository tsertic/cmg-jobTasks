import React from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  const { children, show, toggleModal } = props;
  return (
    <React.Fragment>
      {show && <Backdrop action={toggleModal} />}

      <div style={{ opacity: show ? '1' : '0' }} className={styles.Modal}>
        {children}
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.object
};

export default Modal;
