import React from 'react';
import styles from './FirstScreen.module.css';
import liron from "../images/לירון רוקח.png";
import ContactForm from '../components/form/Form';

const HeroSection = () => {
  return <>
    <div className={styles.heroContainer} dir="rtl">
      <div className={styles.contentWrapper}>
        {/* אזור התוכן */}
        <div className={styles.contentSection}>
          <div className={styles.bgBlur}>
            <div className={styles.blurCircle1}></div>
            <div className={styles.blurCircle2}></div>
          </div>
          
          <div className={styles.textContent}>
            {/* פסקת תיאור */}
            <p className={styles.descriptionB}>
              במיוחד לחיילים משוחררים שרוצים לשים סוף לחוסר וודאות ולמצוא כיוון לחיים
            </p>
            
            {/* כותרת ראשית */}
            <h1 className={styles.title}>ייעוץ תעסוקתי ממוקד שיעזור לך למצוא את הכיוון שלך בחיים</h1>
            <p className={styles.highlightedDescription}>
              כי הגיע הזמן לסיפתח חדש ומדוייק לחיים שלך
            </p>
            {/* אייקונים ומידע */}
            <div className={styles.featuresContainer}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" className={styles.icon} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.featureLabel}>ליווי מותאם אישית</span>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" className={styles.icon} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.featureLabel}>פגישות פרונטליות עם לירון</span>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" className={styles.icon} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18456 2.99721 7.13631 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.featureLabel}>תוצאות מוכחות תוך זמן קצר</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* אזור התמונה */}
        <div className={styles.imageSection}>
          <div className={styles.specialEffectBg}>
            <div className={styles.effectCircle}></div>
            <div className={styles.effectRing}></div>
            <div className={styles.effectBlur}></div>
            <div className={styles.effectShimmer}></div>
            <div className={styles.effectGlass}></div>
          </div>
          <img 
            src={liron} 
            alt="ייעוץ תעסוקתי לחיילים משוחררים" 
            className={styles.heroImage} 
          />
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