import React from 'react'
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2  className={styles.logo}>
        Curtural Voyage
      </h2>
      <button className={styles.btn}>Donate</button>
    </header>
  )
}
