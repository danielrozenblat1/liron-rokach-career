import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import liron from "../../images/לירון רוקח חתימה.png"

const ContactForm = () => {
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs for form fields
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "Liron8915@gmail.com";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const reason = reasonRef.current.value;
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: '',
      reason: reason,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          nameRef.current.value = "";
          phoneRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>השאר פרטים לשיחת ייעוץ ללא עלות</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          ref={nameRef}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          className={styles.phoneInput}
          ref={phoneRef}
          required
        />
        <textarea
          name="reason"
          rows="4"
          placeholder="סיבת פנייה"
          ref={reasonRef}
          required
        />
        <button type="submit" className={styles.submitButton} disabled={isSubmitting || submitted}>
          {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'שלח'}
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