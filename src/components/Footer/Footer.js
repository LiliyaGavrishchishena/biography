import React from 'react';

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
          <p>0981 / 48 77 231</p>
        </li>
        <li className={styles.mail}>
          <p>Jochsem.mueller@hs-ansbach.de</p>
        </li>
        <li className={styles.home}>
          <p>FH Ansbach Residenzstr. 8 91522 Ansbach</p>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
