import React from 'react';
import PropTypes from 'prop-types';
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

Menu.propTypes = {
  resolveHandler: PropTypes.func,
  unResolveHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
  addHandler: PropTypes.func,
  onInputChangeHandler: PropTypes.func,
  value: PropTypes.string,
};

export default Menu;
