import React from 'react';
import styles from './TempContactPage.module.css';

function TempContactPage() {

  return (
    <div>
      <div className={styles.headerContainer}>
          <h1 className={styles.titleText}>Contact</h1>
          <h1 className={styles.subTitleText}>Email us!</h1>
      </div>

      <div className={styles.infoContainer}>
        <p>Email: maijuniorclub@gmail.com</p>
      </div>
    </div>
  );
}

export default TempContactPage;