import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox, Button } from '..';
import styles from './index.module.css';
import { ADD_COLOR, DELETE, RESOLVE, WHITE_COLOR, DONE } from '../../Constants';

const Todo = ({
  text,
  onDelete,
  isResolved,
  onResolveSingleTodo,
  color,
  onAddColor,
}) => {
  return (
    <div
      className={styles.container}
      style={{ background: color ? color : WHITE_COLOR }}
    >
      <div className={styles.text}>{text}</div>
      <div className={styles.checkbox}>
        <CheckBox
          label={RESOLVE}
          checked={isResolved}
          onChange={onResolveSingleTodo}
        />
        {isResolved && <div className={styles.done}>{DONE}</div>}
      </div>
      <div className={styles.buttons}>
        <Button text={ADD_COLOR} onClick={onAddColor} />
        <Button text={DELETE} onClick={() => onDelete()} />
      </div>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
  onDelete: PropTypes.func,
  isResolved: PropTypes.bool,
  resolveSingleTodo: PropTypes.func,
  color: PropTypes.string,
  addColor: PropTypes.func,
};

export default Todo;
