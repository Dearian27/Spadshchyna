import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h2 className={styles.logo}>Curtural Voyage</h2>
      </Link>
      <Link to={'https://savelife.in.ua/donate/#donate-army-card-monthly'} target="_blank">
        <button className={styles.btn}>Підтримати ЗСУ</button>
      </Link>
    </header>
  );
}
