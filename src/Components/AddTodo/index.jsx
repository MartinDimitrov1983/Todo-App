import React from 'react';
import { Button } from '..';
import { ADD_TODO } from '../../Constants';
import styles from './index.module.css';

const AddTodo = ({ onClick, onInputChange, value }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder={ADD_TODO}
        value={value}
        onChange={onInputChange}
      />
      <Button text={ADD_TODO} onClick={onClick}></Button>
    </div>
  );
};

export default AddTodo;
