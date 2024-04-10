import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button } from '..';
import { ADD_COLOR, CLOSE, MODAL_ROOT } from '../../Constants';
import styles from './index.module.css';

const Modal = ({ isOpen, onClose, onAddColor, header, children }) => {
  const handleOverlayClick = (event) => {
    const target = event.target;
    if (target.classList.contains(styles.modalOverlay)) {
      onClose();
    }
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p className={styles.modalHeader}>{header}</p>
              <div className={styles.modalBody}>{children}</div>
              <div className={styles.modalFooter}>
                <Button onClick={onClose} text={CLOSE} />
                <Button onClick={onAddColor} text={ADD_COLOR} />
              </div>
            </div>
          </div>
        </div>,
        document.getElementById(MODAL_ROOT),
      )
    : null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAddColor: PropTypes.func,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
