import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import liron from "../../images/לירון רוקח חתימה.png";
import PrivacyPolicy from '../privacy/Privacy';

const ContactForm = () => {
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Refs for form fields
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "Liron8915@gmail.com";

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }
    
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: '',
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
          setSubmitted(false);
          setAgreed(false);
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
    <div className={styles.formContainer} id="טופס">
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

        {/* תיבת האישור למדיניות הפרטיות */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginTop: "15px",
          marginBottom: "15px"
        }}>
          <label style={{ 
            direction: "rtl", 
            fontFamily: "AssistantR", 
            fontSize: "0.9rem", 
            textAlign: "right", 
            display: "flex", 
            color:'white',
            alignItems: "center", 
            flexWrap: "wrap", 
            gap: "5px" 
          }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              style={{ marginLeft: "10px" }}
            />
            קראתי את
            <span onClick={handlePrivacyClick}>
              <PrivacyPolicy
                ownerName="לירון רוקח"
                email="Liron8915@gmail.com"
                phone="+972 50-670-4555"
                domain="https://lironrokach-career.co.il/"
              />
            </span>
            ואני מאשר/ת
          </label>
        </div>

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