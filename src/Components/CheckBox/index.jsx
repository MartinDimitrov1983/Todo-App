import React from 'react';
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
export default Checkbox;
