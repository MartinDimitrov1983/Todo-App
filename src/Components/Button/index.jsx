import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      <div>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
