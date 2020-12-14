import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PayloadAction } from '@reduxjs/toolkit';

import { getName, setName, clearName } from 'features/CurrentUser/store';
import styles from './CurrentUserDropdown.scss';

export const CurrentUserDropdown: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const name = useSelector(getName);
  const dispatch = useDispatch();
  const dispatchAndClose = (action: PayloadAction<string | void>) => {
    dispatch(action);
    setExpanded(false);
  }

  return (
    <>
      <a
        className={expanded ? styles.togglerExpanded : styles.toggler}
        onClick={() => setExpanded(!expanded)}
      >
        {name ? `${name}` : "👤 Anonym"}
      </a>
      <div className={expanded ? styles.menuVisible : styles.menu}>
        <a className={styles.menuItem} onClick={() => dispatchAndClose(setName('👧 Alice'))}>Sign in Alice</a>
        <a className={styles.menuItem} onClick={() => dispatchAndClose(setName('👦 Bob'))}>Sign in Bob</a>
        <div className={styles.menuDivider}></div>
        <a className={styles.menuItem} onClick={() => dispatchAndClose(clearName())}>Sign Out</a>
      </div>
    </>
  );
};
