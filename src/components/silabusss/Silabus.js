import React, { useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './Silabus.module.css';
import map from "../../icons/wired-outline-106-map-hover-pinch.json"
import dig from "../../icons/wired-outline-666-digging-hover-pinch.json"
import mess from "../../icons/wired-outline-1252-dizz-hover-pinch.json"
import medal from "../../icons/wired-outline-1368-best-seller-hover-pinch.json"
import work from "../../icons/wired-outline-1005-b-2-b-business-to-business-hover-pinch.json"
import directions from "../../icons/wired-outline-730-signpost-direction-hover-spin.json"
import focus from "../../icons/wired-outline-2472-brain-mental-focus-hover-pinch.json"
import story from "../../icons/wired-outline-2344-poetry-hover-pinch.json"
import eight from "../../icons/wired-outline-18-location-pin-in-roll-calm.json"

const BenefitCard = ({ title, icon }) => {
  const playerRef = useRef(null);
  
  const handleComplete = () => {
    // Handle animation complete if needed
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Player icon={icon} ref={playerRef} size="100%" loop={true} onComplete={handleComplete}></Player>
          </div>
        </div>
        <div className={styles.textContent}>
          <p className={styles.benefitText}>{title}</p>
        </div>
      </div>
    </div>
  );
};

const SyllabusComponent = () => {
  const playerRef = useRef(null);
  
  const handleComplete = () => {
    // Handle animation complete if needed
  };
  
  const benefits = [
    {
      title: 'ליווי של 8 שבועות + פגישות ייעוץ ודיוק פעם בשבוע',
      icon: medal
    },
    {
      title: 'הבנה עמוקה של החוזקות והערך שלך בשוק',
      icon: medal
    },
    {
      title: 'כיוון תעסוקתי ברור ומדויק אליך באופן אישי שלא מרגיש כמו הימור',
      icon: medal
    },
    {
      title: 'מענה 24/7 בוואטסאפ',
      icon: medal
    },
    {
      title: 'אימון מנטלי להעלאת מוטיבציה',
      icon: medal
    },
    {
      title: 'עצמאות בקבלת החלטות קדימה',
      icon: medal
    },
    {
      title: 'אימון מנטלי שמפסיק לנהל אותך דרך פחד',
      icon: medal
    },
    {
      title: 'תכנית פעולה אישית שמלווה אותך 3 שנים קדימה',
      icon: medal
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.calendarIconWrapper}>
          <div className={styles.icon}>
            <Player icon={story} ref={playerRef} size="100%" loop={true} onComplete={handleComplete}></Player>
          </div>
        </div>
        <h1 className={styles.mainTitle}>מה מקבלים?</h1>
      </div>
      <div className={styles.cardsContainer}>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SyllabusComponent;