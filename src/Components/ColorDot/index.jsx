import React from 'react';
import PropTypes from 'prop-types';
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

ColorDot.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorDot;
