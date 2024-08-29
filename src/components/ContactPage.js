import React, {useState} from 'react';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };

      console.log('Updated form values:', updatedValues); //Debugging

      validateForm(updatedValues);
      return updatedValues;
    });
  };

  const validateForm = (values) => {
    console.log('Current form values:', values); //Debugging

    const isValid =
      values.name &&
      /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(values.phone) && // Phone number pattern
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) && // Email pattern
      values.subject.length > 0 &&
      values.message.length > 0;

    console.log('Is form valid:', isValid); //Debugging

    setIsFormValid(isValid);
  };

  return (
    <div>
      <div className={styles.headerContainer}>
          <h1 className={styles.titleText}>Contact Us</h1>
          <h1 className={styles.subTitleText}>Submit your inquiries through an email form</h1>
      </div>
      
      <p className={styles.required}>*Required</p>

      <div className={styles.formContainer}>
        <form action="/submit" method="post" className={styles.contactForm}>

          <label htmlFor="name">Full Name<span className={styles.required}>*</span></label>
          <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formValues.name}
              onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
          <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
              value={formValues.phone}
              onChange={handleChange}
          />

          <label htmlFor="email">E-mail<span className={styles.required}>*</span></label>
          <input 
              type="email" 
              id="email" 
              name="email" 
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              required 
              value={formValues.email}
              onChange={handleChange}
          />

          <label htmlFor="subject">Subject<span className={styles.required}>*</span></label>
          <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Max 50 characters"
              maxLength="50"
              minLength="1"
              required
              value={formValues.subject}
              onChange={handleChange}
          />

          <label htmlFor="message">Message<span className={styles.required}>*</span></label>
          <textarea 
              id="message" 
              name="message" 
              minLength="1" 
              required
              value={formValues.message}
              onChange={handleChange}>
          </textarea>

          <button type="submit" 
              disabled={!isFormValid} 
              className={`${styles.submitButton} ${!isFormValid ? styles.disabled : ''}`}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;