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
    <Logo />
    <Nav items={navItems} />
  </header>
);

export default Header;
