import React from 'react';
import styles from './ProgramsPage.module.css';

function ProgramsPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
          <h1 className={styles.titleText}>Our Programs</h1>
          <h1 className={styles.subTitleText}>Currently teaching Fall 2024 to Spring 2025</h1>
      </div>
      <div className={styles.programDetails}>
        <div>
          <h2>Mondays: September 16, 2024 to June 2, 2025</h2>
          <p>Location: Stephen Lewis Secondary School <br/>3675 Thomas St, Mississauga, ON</p>
          <p className={styles.cancellations}>Closure dates: X (Christmas), Y, Z, 2024</p>

          <div className={styles.programOptions}>
            <div>
              <h3>Ages 9-12: 6-8PM</h3>
              <p>This class in intended for younger students with growing interest in the sport. Classes will be focused on skill development, with drills that are adaptable to varying skill levels.</p>
              <ul>
                <li>6 - 7:30 PM Instruction</li>
                <li>7:30 - 8 PM Playtime</li>
                <li>$750 per student ($25 per class)</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
            
            <div>
              <h3>Ages 13-17: 7:30-10PM</h3>
              <p>This class in intended for older students looking to develop more advanced skills. Drills will be focused on improving shot selection, footwork, and game strategy.</p>
              <ul>
                <li>7:30 - 9 PM Instruction</li>
                <li>9 - 10 PM Playtime</li>
                <li>$750 per student ($25 per class)</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.programDetails}>
        <div>
          <h2>Fridays: September 20, 2024 to June 6, 2025</h2>
          <p>Location: Meadowvale Secondary School <br/>6700 Edenwood Dr, Mississauga, ON</p>
          <p className={styles.cancellations}>Closure dates: X (Christmas), Y, Z, 2024</p>

          <div className={styles.programOptions}>
            <div>
              <h3>Ages 9-12: 6-8PM</h3>
              <p>This class in intended for younger students with growing interest in the sport. Classes will be focused on skill development, with drills that are adaptable to varying skill levels.</p>
              <ul>
                <li>6 - 7 PM Instruction</li>
                <li>7 - 8 PM Playtime</li>
                <li>$640 per student ($20 per class)</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
            
            <div>
              <h3>Ages 13-17: 6-8PM</h3>
              <p>This class in intended for older students looking to develop more advanced skills. Drills will be focused on improving shot selection, footwork, and game strategy.</p>
              <ul>
                <li>6 - 7 PM Playtime</li>
                <li>7 - 8 PM Instruction</li>
                <li>$640 per student ($20 per class)</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add interactive calendar here */}
    </div>
  );
}

export default ProgramsPage;
