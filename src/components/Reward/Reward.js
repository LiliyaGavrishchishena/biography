import React from 'react';
// components
import foto2 from '../../assets/images/foto2.png';
// styles
import styles from './Reward.module.css';

const Reward = () => (
  <div className={styles.reward}>
    <img src={foto2} alt="Reward" />
    <div>
      <p>
        11/2008 Verleihung Zertifikat Dozent für Weiterbildung an Hochschulen
      </p>
      <p>2010 Gründung des MBA-Studienganges Kreatives Marketing Management</p>
      <p>
        2010 Studiengangleitung MBA-Studiengang Kreatives Marketing Management
      </p>
      <p>
        2010 Vorsitz der Prüfungskommission MBA-Studiengang Kreatives Marketing
        Management
      </p>
      <p>2010 Leitung des ESF-Forschungsprojektes TINA </p>
    </div>
  </div>
);

export default Reward;
