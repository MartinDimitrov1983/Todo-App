import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className={styles.checkBoxWrapper}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
