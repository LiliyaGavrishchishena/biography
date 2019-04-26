import React from 'react';
// styles
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <h3>Datenschutz Impressum</h3>
      <div className={styles.footer_contacts}>
        <a href="tel:+09814877231">0981 / 48 77 231</a>
        <a href="mailto:">Jochsem.mueller@hs-ansbach.de</a>
        <span>FH Ansbach Residenzstr. 8 91522 Ansbach</span>
      </div>
    </div>
  </footer>
);

export default Footer;
