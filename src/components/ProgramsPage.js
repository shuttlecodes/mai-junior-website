import React from 'react';
import styles from './ProgramsPage.module.css';
import Calendar from './Calendar';

function ProgramsPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
          <h1 className={styles.titleText}>Our Programs</h1>
          <h1 className={styles.subTitleText}>Currently teaching Fall 2024 to Spring 2025</h1>
      </div>

      <div className={styles.programDetails}>
        <h2>Calendar</h2>
        <p>If you have any questions about these session times, please feel free to email us at maijuniorclub@gmail.com</p>
        <div className={styles.calendarContainer}>
          <Calendar />
        </div>
      </div>

      <div className={styles.programDetails}>
        <div>
          <h2>Mondays: September 16, 2024 to June 2, 2025</h2>
          <p>Location: Stephen Lewis Secondary School <br/>3675 Thomas St, Mississauga, ON</p>
          <p className={styles.cancellations}>No classes on October 14, 2024, February 17, March 10, April 21, and May 19, 2025.
            <br/>Winter Break closures: December 23, 2024 to January 8, 2025
          </p>

          <div className={styles.programOptions}>
            <div>
              <h3>Ages 9-12: 6-8PM</h3>
              <p>This class is intended for younger students with growing interest in the sport. Classes will be focused on skill development, with drills that are adaptable to varying skill levels.</p>
              <ul>
                <li>6 - 7:30 PM Instruction</li>
                <li>7:30 - 8 PM Playtime</li>
                <li>$750 per student</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
            
            <div>
              <h3>Ages 13-17: 7:30-10PM</h3>
              <p>This class is intended for older students looking to develop more advanced skills. Drills will be focused on improving shot selection, footwork, and game strategy.</p>
              <ul>
                <li>7:30 - 9 PM Instruction</li>
                <li>9 - 10 PM Playtime</li>
                <li>$750 per student</li>
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
          <p className={styles.cancellations}>No classes on November 1, 2024, March 14, 2025, April 18, 2025.
            <br/>Winter Break closures: December 16, 2024 to January 6, 2025
          </p>

          <div className={styles.programOptions}>
            <div>
              <h3>Ages 9-12: 6-8PM</h3>
              <p>This class is intended for younger students with growing interest in the sport. Classes will be focused on skill development, with drills that are adaptable to varying skill levels.</p>
              <ul>
                <li>6 - 7 PM Instruction</li>
                <li>7 - 8 PM Playtime</li>
                <li>$640 per student</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
            
            <div>
              <h3>Ages 13-17: 6-8PM</h3>
              <p>This class is intended for older students looking to develop more advanced skills. Drills will be focused on improving shot selection, footwork, and game strategy.</p>
              <ul>
                <li>6 - 7 PM Playtime</li>
                <li>7 - 8 PM Instruction</li>
                <li>$640 per student</li>
              </ul>
              <button className={styles.registerButton}>Registration Full</button>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default ProgramsPage;
