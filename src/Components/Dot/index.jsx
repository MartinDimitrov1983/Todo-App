import React from 'react';
import styles from './index.module.css';

const Dot = ({ color, onClick }) => {
  return (
    <div
      className={styles.dot}
      style={{ background: color }}
      onClick={() => onClick()}></div>
  );
};

export default Dot;
