import React from 'react';
import styles from './FirstScreen.module.css';
import ContactForm from '../components/form/Form';

const HeroSection = () => {
  return <>
    <div className={styles.heroContainer} dir="rtl">
      <div className={styles.contentWrapper}>
        {/* אזור התוכן - כעת תופס את כל המקום */}
        <div className={styles.contentSection}>
  
          
          <div className={styles.textContent}>
            {/* פסקת תיאור */}
            <p className={styles.descriptionB}>
              במיוחד לחיילים משוחררים שרוצים לשים סוף לחוסר וודאות ולמצוא כיוון לחיים
            </p>
            
            {/* כותרת ראשית */}
            <h1 className={styles.title}>איך למצוע מקצוע שבאמת מתאים לך - גם בלי נסיון, קשרים, או מושג מה אתה רוצה </h1>
            <p className={styles.highlightedDescription}>
              כי הגיע הזמן לסיפתח חדש ומדוייק לחיים שלך
            </p>
            {/* אייקונים ומידע */}
           
         
          </div>
        </div>
      </div>
      
      {/* טופס יצירת קשר */}
      <div className={styles.formSection}>
        <ContactForm />
      </div>
    </div>
  </>
};

export default HeroSection;