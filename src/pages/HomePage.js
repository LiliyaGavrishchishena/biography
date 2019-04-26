import React from 'react';
// components
import Biography from '../components/Biography/Biography';
import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import Reward from '../components/Reward/Reward';
// styles
import styles from './HomePage.module.css';

const HomePage = () => (
  <main className={styles.home}>
    <div className={styles.container}>
      <Biography />
      <SimpleSlider />
      <Reward />
    </div>
  </main>
);

export default HomePage;
