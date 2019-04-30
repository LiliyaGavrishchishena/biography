import React from 'react';
// components
import foto2 from '../../assets/images/foto2.png';
// styles
import styles from './Reward.module.css';

const Reward = () => (
  <div className={styles.reward}>
    <div className={styles.rewardText}>
      <h3 className={styles.title}>Preise</h3>
      <p className={styles.text}>
        11/2008 Verleihung Zertifikat Dozent für Weiterbildung an Hochschulen
        Gründung des MBA-Studienganges Kreatives Marketing Management
        <br />
        2010 Gründung des MBA-Studienganges Kreatives Marketing Management
        Studiengangleitung MBA-Studiengang Kreatives Marketing Management
        <br />
        2010 Studiengangleitung MBA-Studiengang Kreatives Marketing Verleihung
        Zertifikat Dozent für Weiterbildung an Hochschulen
        <br />
        2010 Vorsitz der Prüfungskommission MBA-Studiengang Kreatives
        MBA-Studiengang Kreatives Marketing Management Management
        <br /> 2010 Leitung des ESF-Forschungsprojektes TINA Verleihung
        Zertifikat Dozent für Weiterbildung an Hochschulen
      </p>
    </div>
    <div className={styles.rewardImg}>
      <img src={foto2} alt="Reward" />
    </div>
  </div>
);

export default Reward;
