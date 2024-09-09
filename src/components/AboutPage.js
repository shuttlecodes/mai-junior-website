import React from 'react';
import styles from './AboutPage.module.css';
import tealShuttle from '../images/one-shuttle-teal.jpg';
import courtGraphic from '../images/court-graphic.jpg';

function AboutPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
          <h1 className={styles.titleText}>About Us</h1>
          <h1 className={styles.subTitleText}>A brief background on MAI Junior</h1>
      </div>
      <div className={styles.historySection}>
        <img src={tealShuttle} alt="Shuttle on teal court" />
        <div>
          <h2>Mission</h2>
          <p>
            Founded in 2020 by a local student, MAI Junior Badminton Club is dedicated to providing accessible and affordable badminton classes for youth in our community.
          </p>
          <p>
            <strong>Our Vision:</strong> At MAI Junior, we strive to make a positive impact in our community. 
            We hope to empower students through quality coaching, fostering both skill and confidence in a supportive environment.
          </p>
        </div>
      </div>

      <div className={styles.coachSection}>
        <div>
          <h2>Our Coaches</h2>
          <p>Our team of dedicated coaches are passionate badminton players, with years of experience.
            They are here to help students improve their skills through lessons and drills. Students can then apply this learning through dedicated gameplay time.
          </p>
        </div>
      </div>

        <div className={styles.futureSection}>
        <div>
          <h2>Looking Ahead</h2>
          <p>
            As we grow, we’re excited to expand our programs and facilities. Stay tuned for new classes, tournaments, and events!
          </p>
        </div>
        <img src={courtGraphic} alt="Shuttle on teal court" />
        </div>
    </div>
  );
}

export default AboutPage;