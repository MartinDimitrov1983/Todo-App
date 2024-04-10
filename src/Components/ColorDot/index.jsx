import React from 'react';
import styles from './index.module.css';

const ColorDot = ({ color, onClick }) => {
  return (
    <div
      className={styles.dot}
      style={{ background: color }}
      onClick={() => onClick()}
    ></div>
  );
};

export default ColorDot;
