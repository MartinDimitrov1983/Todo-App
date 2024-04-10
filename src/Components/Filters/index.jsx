import React from 'react';
import { CheckBox, ColorDot, Button } from '..';
import {
  CLEAR_FILTERS,
  FILTERS,
  MY_TASKS,
  RESOLVED,
  UNRESOLVED,
  COLORS,
} from '../../Constants';
import styles from './index.module.css';

const Filters = ({
  setResolved,
  setUnresolved,
  setFilterColor,
  resolved,
  unresolved,
  dotColors,
}) => {
  return (
    <>
      <h2 className={styles.title}>{MY_TASKS}</h2>
      <div>
        <div className={styles.filters}>
          <h4>{FILTERS}</h4>
          <Button
            onClick={() => {
              setResolved(false);
              setUnresolved(false);
              setFilterColor(false);
            }}
            text={CLEAR_FILTERS}
          />
        </div>
        <div className={styles.filter}>
          <CheckBox
            label={RESOLVED}
            checked={resolved}
            onChange={() => setResolved((prev) => !prev)}
          />
          <CheckBox
            label={UNRESOLVED}
            checked={unresolved}
            onChange={() => setUnresolved((prev) => !prev)}
          />
        </div>
        <div>
          <h5>{COLORS}</h5>
          <div className={styles.colorFilter}>
            {dotColors.map((color) => (
              <ColorDot
                color={color}
                key={color}
                onClick={() => setFilterColor(color)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
