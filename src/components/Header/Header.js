import React from 'react';
// components
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
// configs
import items from '../../configs/nav';
// styles
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <Nav items={items} />
    </div>
  </header>
);

export default Header;
