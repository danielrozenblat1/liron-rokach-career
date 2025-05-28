
import React from 'react';
import styles from './Form.module.css';
import liron from "../../images/לירון רוקח חתימה.png"

const ContactForm = () => {
  return (
    <div className={styles.formContainer} id="טופס">
      <h2 className={styles.title}>השאר פרטים לשיחת ייעוץ ללא עלות</h2>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          className={styles.phoneInput}
          required
        />
        <textarea
          name="reason"
          rows="4"
          placeholder="סיבת פנייה"
          required
        />
        <button type="submit" className={styles.submitButton}>
          שלח
        </button>
      </form>

      {/* תמונה מטושטשת מתחת לכפתור */}
      <div className={styles.imageWrapper}>
        <img
          src={liron}
          alt="חתימה של לירון"
          className={styles.blurImage}
        />
      </div>
    </div>
  );
};

export default ContactForm;