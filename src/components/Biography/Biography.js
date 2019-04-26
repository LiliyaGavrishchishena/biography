import React from 'react';
// components
import foto1 from '../../assets/images/foto1.png';
// styles
import styles from './Biography.module.css';

const Biography = () => (
  <div className={styles.biography}>
    <div className={styles.biographyImg}>
      <img src={foto1} alt="Biography" />
    </div>
    <div className={styles.biographyText}>
      <p>
        Prof. Dr. Jochem Müller wurde 1964 in Oberrodach / Bayern geboren. Das
        Geburtsjahr war nach dem chinesischen Horoskop das Jahr des Drachens.
        Der Drache ist in China eines der stärksten Glückssymbole überhaupt.
        Menschen, die im Zeichen des Drachen geboren sind, sind gesund,
        energiegeladen und führungsstark. Er studierte von 1982 bis 1986
        Betriebswirtschaftslehre an der Fachhochschule Coburg.
        Studienschwerpunkte: Organisation und Datenverarbeitung (Prof. Dr.
        Winkler) und Rechnungswesen (Prof. Dr. Kalweit) Hochbegabtenförderung
        der Bayerischen Staatsregierung und Stipendiat der
        Hanns-Seidel-Stiftung.
      </p>
    </div>
  </div>
);

export default Biography;
