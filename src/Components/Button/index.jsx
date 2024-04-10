import React from 'react';
import styles from './index.module.css';

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      <div>{text}</div>
    </button>
  );
};

export default Button;
