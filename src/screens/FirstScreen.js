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

          {/* סרטון Vimeo */}
          <div className={styles.videoContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                className={styles.vimeoPlayer}
                src="https://player.vimeo.com/video/1150842285?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                title="Course Preview Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
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