import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
// styles
import styles from './Logo.module.css';

const Logo = () => (
  <Link className={styles.logo} to={routes.MAIN}>
    <div>Prof.Dr.Jochem Müller</div>
  </Link>
);

export default Logo;
