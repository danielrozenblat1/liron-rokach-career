import React from 'react';
import styles from './FirstScreen.module.css';
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
              במיוחד לחיילים משוחררים
            </p>
            
            {/* כותרת ראשית */}
            <h1 className={styles.title}>איך למצוא כיוון קריירה ברור בלי להמר על תחום ובלי לפחד מהבחירה</h1>
          </div>

          {/* סרטון יוטיוב */}
          <div className={styles.videoContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                className={styles.youtubePlayer}
                src="https://www.youtube-nocookie.com/embed/mjTsQty_ADM?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
                title="Course Preview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.formSection}>
            <ContactForm />
          </div>
        </div>
        
      </div>
    </div>
  </>
};

export default HeroSection;