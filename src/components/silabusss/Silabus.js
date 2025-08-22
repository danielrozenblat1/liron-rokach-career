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

const SessionCard = ({ day, title, description, icon }) => {
  const playerRef = useRef(null);
  
  const handleComplete = () => {
    // Handle animation complete if needed
  };

  return (
    <div className={styles.card}>
      <div className={styles.dayBadge}>מפגש {day}</div>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Player icon={icon} ref={playerRef} size="100%" loop={true} onComplete={handleComplete}></Player>
          </div>
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
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
  
  // Icons should be imported or defined as needed
  // These are placeholders - you'll need to replace with actual lordicon JSON objects
  const searchIcon = mess
  const mapIcon = map
  const compassIcon = directions
  const mountainIcon = dig
  
  const sessions = [
    {
      day: 1,
      title: 'עושים סדר בבלגן',
      description: 'בוא נבין יחד מה חשוב לך, מה מניע אותך, ומה כבר לא מעניין אותך. זו ההתחלה של לגלות מי אתה באמת – בלי פילטרים.',
      icon: searchIcon
    },
    {
      day: 2,
      title: 'מפה אישית לקריירה',
      description: 'נאסוף את כל מה שגילינו ונגלה מה הכיוונים שמדליקים אותך באמת. נחבר את כל החלקים למסר אחד ברור: מי אתה, מה אתה מחפש, ומה הכי מתאים לך.',
      icon: mapIcon
    },
    {
      day: 3,
      title: 'בוחנים כיוונים אמיתיים ומתמקדים',
      description: 'תבחר 2–3 כיוונים תעסוקתיים שמרגשים אותך. נבחן אותם מכל זווית: למה זה מעניין אותך, מה מושך שם, ומה אתה צריך לבדוק. נצלול עמוק יותר לתוך הכיוונים שבחרת, ננתח אותם מול מי שאתה באמת – ונבחר יחד את הכיוון הכי מדויק עבורך.',
      icon: compassIcon
    },
    {
      day: 4,
      title: 'יוצאים לבדוק את השטח והסיפור שלך נכתב',
      description: 'נחקור את התחום שבחרת: איך הוא נראה באמת, איזה אתגרים מחכים לך, מה התנאים, ואיפה אפשר להתחיל. נסכם את כל מה שעברת – ונבנה יחד חזון אישי ומרגש לחיים המקצועיים שלך בעוד 3–5 שנים. עם משמעות, מוטיבציה, ושקט פנימי שאתה בדרך שלך.',
      icon: mountainIcon
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.calendarIconWrapper}>
          <div className={styles.icon}>
            <Player icon={map} ref={playerRef} size="100%" loop={true} onComplete={handleComplete}></Player>
          </div>
        </div>
        <h1 className={styles.mainTitle}>4 מפגשים ואתה ביעד!</h1>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
        <div className={styles.progressSteps}>
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={styles.progressStep}>
              <span className={styles.stepNumber}>{step}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {sessions.map((session) => (
          <SessionCard
            key={session.day}
            day={session.day}
            title={session.title}
            description={session.description}
            icon={session.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SyllabusComponent;