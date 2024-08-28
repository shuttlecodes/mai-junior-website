import React from 'react';
import styles from './HomePage.module.css';

import purpleCourtImage from '../images/purple-court-graphic.jpg';
import studentsImage from '../images/students-dec2023.jpg';
import pizzaImage from '../images/pizza-dec2023.jpg';
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
        <div className={styles.imageContainer}>
          <img src={studentsImage} alt="Feather shuttle on a court" />
          <img src={pizzaImage} alt="Winter Pizza Night 2023" />
        </div>
        <div className={styles.imageContainer}>
          <img src={tealCourtImage} alt="Feather shuttles on court" />
        </div>
        <div className={styles.aboutText}>
          <h2>About</h2>
          <p>
          We are a local badminton club with the goal of providing accessible and affordable classes for youth. Led by a team of passionate badminton players, we dedicate ourselves to creating a safe, fun, and engaging learning environment for our students.
          </p>
          <a href="/about" className={styles.readMore}>Read More</a>
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
        <p>Click on each program card to view more details.</p>
        <div className={styles.programCards}>
          <div className={styles.programCard}>
            <h3>Monday: Ages 9-12</h3>
            <p>Mondays 6-8PM</p>
            <p>Stephen Lewis S.S.</p>
          </div>
          <div className={styles.programCard}>
            <h3>Monday: Ages 13-17</h3>
            <p>Mondays 7:30-10PM</p>
            <p>Stephen Lewis S.S.</p>
          </div>
          <div className={styles.programCard}>
            <h3>Friday: Ages 9-12</h3>
            <p>Fridays 6-8PM</p>
            <p>Meadowvale S.S.</p>
          </div>
          <div className={styles.programCard}>
            <h3>Friday: Ages 13-17</h3>
            <p>Fridays 6-8PM</p>
            <p>Meadowvale S.S.</p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Contact</h2>
        <p>Want to learn more? Feel free to reach out with questions about our programs or organization.</p>
        <a href="/contact" className={styles.contactButton}>Let's Talk</a>
      </div>


    </div>
  );
}

export default HomePage;

            
            
            
 