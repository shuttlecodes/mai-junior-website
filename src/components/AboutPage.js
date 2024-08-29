import React from 'react';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
          <h1 className={styles.titleText}>About Us</h1>
          <h1 className={styles.subTitleText}>A brief background on MAI Junior</h1>
      </div>
      <div className={styles.historySection}>
        <p>Coming soon!</p>
      </div>
    </div>
  );
}

export default AboutPage;