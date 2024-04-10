import React from 'react';
import { CheckBox, Button } from '..';
import styles from './index.module.css';
import { ADD_COLOR, DELETE, RESOLVE, WHITE_COLOR } from '../../Constants';

const Todo = ({
  text,
  onDelete,
  isResolved,
  resolveSingleTodo,
  color,
  addColor,
}) => {
  const onClick = () => {};

  return (
    <div
      className={styles.container}
      onClick={onClick}
      style={{ background: color? color: WHITE_COLOR }}>
      <div className={styles.text}>{text}</div>
      <div className={styles.checkbox}>
        <CheckBox
          label={RESOLVE}
          checked={isResolved}
          onChange={resolveSingleTodo}
        />
        {isResolved && <div className={styles.done}>Done</div>}
      </div>
      <div className={styles.buttons}>
        <Button text={ADD_COLOR} onClick={addColor} />
        <Button text={DELETE} onClick={() => onDelete()} />
      </div>
    </div>
  );
};

export default Todo;
