import React from 'react';
import { Button, AddTodo } from '..';
import { RESOLVE_ALL, UNRESOLVE_ALL, REMOVE_ALL } from '../../Constants';
import styles from './index.module.css';

const Menu = ({
  resolveHandler,
  unResolveHandler,
  deleteHandler,
  addHandler,
  onInputChangeHandler,
  value,
}) => {
  return (
    <aside className={styles.menu}>
      <div className={styles.buttons}>
        <Button text={RESOLVE_ALL} onClick={resolveHandler}></Button>
        <Button text={UNRESOLVE_ALL} onClick={unResolveHandler}></Button>
        <Button text={REMOVE_ALL} onClick={deleteHandler}></Button>
      </div>
      <AddTodo
        onClick={addHandler}
        onInputChange={onInputChangeHandler}
        value={value}
      />
    </aside>
  );
};

export default Menu;
