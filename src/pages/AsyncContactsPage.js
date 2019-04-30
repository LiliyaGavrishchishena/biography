import React from 'react';
// componens
import Map from '../components/Map/Map';
// styles
import styles from './AsyncContactsPage.module.css';

const AsyncContactsPage = () => (
  <div className={styles.projects}>
    <h3 className={styles.title}>My contacts</h3>
    <Map />
  </div>
);

export default AsyncContactsPage;
