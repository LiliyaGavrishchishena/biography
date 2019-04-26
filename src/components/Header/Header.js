import React from 'react';
// components
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
// configs
import navItems from '../../configs/nav';
// styles
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <Nav items={navItems} />
    </div>
  </header>
);

export default Header;
