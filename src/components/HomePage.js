import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

import purpleCourtImage from '../images/purple-court-graphic.jpg';
import tealCourtImage from '../images/teal-court.jpg';

function HomePage() {
  return (
    <div> 
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.subTitleText}>Milton Athletic Institute (MAI)</h1>
          <h1 className={styles.titleText}>Junior Badminton Club</h1>
        </div>
        <img src={purpleCourtImage} alt="Purple court graphic" />
      </div>

      <div className={styles.aboutSection}>
        <img src={tealCourtImage} alt="Feather shuttles on court" />
        <div className={styles.aboutText}>
          <h2>About</h2>
          <p>
          We are a local badminton club with the goal of providing accessible and affordable classes for youth. Led by a team of passionate badminton players, we dedicate ourselves to creating a safe, fun, and engaging learning environment for our students.
          </p>
          <Link to="/about" className={styles.readMore}>Read More</Link>
        </div>
      </div>

      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <div className={styles.missionItems}>
          <div className={styles.missionItem}>
            <div className={styles.number}>1</div>
            <p><strong>Provide quality coaching to empower our students. </strong>With focused coaching and steady progress, we aim to help our students gain competency and confidence.</p>
          </div>
          <div className={styles.missionItem}>
            <div className={styles.number}>2</div>
            <p><strong>Create a safe and inclusive space, </strong>where students can feel comfortable approaching our instructors, and have the chance to make new friends!</p>
          </div>
        </div>
      </div>

      <div className={styles.programSection}>
        <h2>Our Programs</h2>
        <p>Click on each program card to view more details. <strong>Please note that our classes for the 2024-25 school year are currently full.</strong></p>
        <div className={styles.programCards}>
          <Link to="/programs" className={styles.programCard}>
            <h3>Monday: Beginnner/Intermediate</h3>
            <p>Monday 6-7:30PM</p>
            <p>Stephen Lewis S.S.</p>
          </Link>
          <Link to="/programs" className={styles.programCard}>
            <h3>Monday: Advanced</h3>
            <p>Monday 7:30-9PM</p>
            <p>Stephen Lewis S.S.</p>
          </Link>
          <Link to="/programs" className={styles.programCard}>
            <h3>Friday: Beginnner/Intermediate</h3>
            <p>Friday 6-8PM</p>
            <p>Meadowvale S.S.</p>
          </Link>
          <Link to="/programs" className={styles.programCard}>
            <h3>Friday: Advanced</h3>
            <p>Friday 6-8PM</p>
            <p>Meadowvale S.S.</p>
          </Link>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Contact</h2>
        <p>Want to learn more? Feel free to reach out with questions about our programs or organization.</p>
        <Link to="/temp-contact" className={styles.contactButton}>Let's Talk</Link>
      </div>


    </div>
  );
}

export default HomePage;

            
            
            
 