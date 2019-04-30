import React from 'react';
// components
import { ReactComponent as Phone } from '../../assets/svg/phone.svg';
import { ReactComponent as Email } from '../../assets/svg/envelope.svg';
import { ReactComponent as Home } from '../../assets/svg/home.svg';
// styles
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Datenschutz Impressum</h3>
      </div>

      <ul className={styles.contacts}>
        <li className={styles.phone}>
          <Phone />
          <p>0981 / 48 77 231</p>
        </li>
        <li className={styles.mail}>
          <Email />
          <p>Jochsem.mueller@hs-ansbach.de</p>
        </li>
        <li className={styles.home}>
          <Home />
          <p>FH Ansbach Residenzstr. 8 91522 Ansbach</p>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
