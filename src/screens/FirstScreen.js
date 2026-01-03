import React, { useState } from 'react';
import styles from './FirstScreen.module.css';
import ContactForm from '../components/form/Form';
import rokach from "../images/טאמבנייל.png"
const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.heroContainer} dir="rtl">
      <div className={styles.contentWrapper}>
        <div className={styles.contentSection}>
          <div className={styles.bgBlur}>
            <div className={styles.blurCircle1}></div>
            <div className={styles.blurCircle2}></div>
          </div>
          
          <div className={styles.textContent}>
            <p className={styles.descriptionB}>
              במיוחד לחיילים משוחררים
            </p>
            <h1 className={styles.title}>איך למצוא כיוון קריירה ברור בלי להמר על תחום ובלי לפחד מהבחירה</h1>
          </div>

          <div className={styles.videoContainer}>
            <div className={styles.videoPlayer}>
              {!isPlaying ? (
                <div 
                  className={styles.thumbnailWrapper}
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src={rokach}
                    alt="צפה בסרטון"
                    className={styles.thumbnail}
                  />
                  <button className={styles.playButton}>
                    <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              ) : (
                <iframe
                  className={styles.vimeoPlayer}
                  src="https://player.vimeo.com/video/1150842285?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Course Preview Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          <div className={styles.formSection}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;