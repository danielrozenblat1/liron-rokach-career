import React from 'react';
import styles from './WhoFits.module.css';
import { FaCheck, FaTimes, FaStar, FaUserShield, FaRocket, FaHandshake } from 'react-icons/fa';

const EligibilitySection = () => {
  // מי מתאים לתהליך
  const eligibleList = [
    {
      text: "חיילים משוחררים בגילאי 21-25 שמרגישים חוסר ודאות לגבי העתיד המקצועי שלהם",
      icon: <FaStar className={styles.icon} />
    },
    {
      text: "מי שמוכן להשקיע מאמץ ולהתחייב לתהליך שיוביל לשינוי אמיתי",
      icon: <FaUserShield className={styles.icon} />
    },
    {
      text: "מי שמחפש את התשוקה האמיתית שלו ולא רק עוד תפקיד שיעזור לו לשרוד",
      icon: <FaRocket className={styles.icon} />
    },
    {
      text: "מי שמרגיש שהלחץ החברתי והמשפחתי מכתיב את הבחירות שלו",
      icon: <FaHandshake className={styles.icon} />
    },
    {
        text: "מי שעומד להשתחרר בשלושה חודשים הקרובים ורוצה לצאת לאזרחות עם וודאות ורוגע",
        icon: <FaRocket className={styles.icon} />
      },
  ];

  // מי לא מתאים לתהליך
  const nonEligibleList = [
    {
      text: "מי שלא באמת מוכן להשקיע בעצמו ומחפש פתרונות קסם",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שלא מוכן להתחייב לתהליך ולבצע את המשימות הנדרשות",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שרוצה שמישהו אחר יחליט עבורו, במקום לקחת אחריות על הבחירות שלו",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
        text: "מי שעדיין בתחילת השירות הצבאי שלו",
        icon: <FaTimes className={styles.iconNegative} />
      }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.glowEffect}></div>
      
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h2 className={styles.title}>מי מתאים לתהליך</h2>
          <div className={styles.line}></div>
          
          <ul className={styles.list}>
            {eligibleList.map((item, index) => (
              <li key={`eligible-${index}`} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>מי לא מתאים לתהליך</h2>
          <div className={styles.lineNegative}></div>
          
          <ul className={styles.list}>
            {nonEligibleList.map((item, index) => (
              <li key={`non-eligible-${index}`} className={styles.listItemNegative}>
                <div className={styles.iconWrapperNegative}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;