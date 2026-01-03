import React from 'react';
import styles from './Me.module.css';
import liron from "../../images/רוקח - מי אני.png";
import lironTadmit from "../../images/לירון רוקח תדמית.jpg"
import ContactForm from '../lightForm/Form';
const AboutMe = () => {
  return <>
    <div className={styles.container}>
      {/* חלק ראשון */}
      <section className={styles.sectionOne}>
        <div className={styles.contentBox}>
          <h1 className={styles.mainTitle}>נעים מאוד, לירון רוקח</h1>
          <h2 className={styles.subTitle}>"עברתי את הדרך הארוכה בעצמי ועכשיו המטרה שלי היא לקצר אותה לאחרים"</h2>
          <div className={styles.description}>
          <p className={styles.descParagraph}>
            תמיד כששאלו אותי מה אני רוצה לעשות בחיים לא ידעתי לענות על השאלה - חשבתי לעצמי - בוא נהנה עכשיו נעשה קצת כיף וכשיגיע הרגע כבר אני בטוח אבין.. שירתתי בחיל הים בתור מפקד ועברו דרכי אלפי חיילים ואפשר לומר שהיה לי שירות מטורף אבל ברגע שגזרתי את החוגר - משהו השתנה 
            </p>
            <p className={styles.descParagraph}>
האופוריה של השחרור הפכה עם הזמן לריקנות ותחושת תסכול שהכבידה עלי ככל שהזמן עבר
            </p>

          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={lironTadmit} alt="לירון רוקח יועץ קריירה" className={styles.profileImage} />
        </div>
      </section>

      {/* תוכן ממורכז */}
      <section className={styles.centeredContent}>
        <h3 className={styles.specialSubtitle}>עברתי במשך שנתיים מתחום לתחום</h3>
        
        {/* תמונה ממורכזת */}
        <div className={styles.centeredImageContainer}>
          <img src={liron} alt="לירון רוקח בעבודה" className={styles.centeredImage} />
        </div>
        
        <div className={styles.centeredTextContent}>

        <p className={styles.centeredParagraph}>
           השקעתי עשרות אלפי שקלים על קורסים והכשרות בתחומים שחשבתי שאני אוהב אבל כל כמה חודשים התחלתי שוב להרגיש שוואלה -זה לא מה שאני רוצה לעשות כל החיים
          </p>
          <h3 className={styles.specialSubtitle}>עד לרגע שהכל השתנה</h3>
     
          <p className={styles.centeredParagraph}>
            יום אחד הבנתי שכל החיפושים שלי היו בעצם חלק מהתשובה. 
            גיליתי שהחוזקה שלי נמצאת ביכולת לזהות את הפוטנציאל האמיתי של אנשים, ולהתאים אותו לקריירה שתביא להם סיפוק ולהוביל אותם לוודאות שהם תמיד חיפשו. הניסיון האישי שלי - המסע שעברתי כמפקד ומדריך בצבא וכל המעבר בין התחומים השונים באזרחות - היה בדיוק מה שהכין אותי להבין את מי שנמצא באותו המקום. פתאום ראיתי בבירור את הייעוד שלי: לעזור לאחרים למצוא את הייעוד שלהם מבלי לעבור את כל הסבל והבזבוז שאני חוויתי.
          </p>
          <p className={styles.centeredParagraph}>בחצי שנה האחרונה לקחתי את התשוקה שלי צעד אחד קדימה - עברתי אצל מיטב המומחים בתחום וזיקקתי את השיטות שלהם והידע שצברתי לשיטה שמותאמת לכל אחד!</p>
      
          <p className={styles.centeredParagraph}>
              אני לא מציע פתרונות קסם או הבטחות ריקות – אני מציע דרך מוכחת שנבנתה מהניסיון האישי שלי ומהעבודה עם אחרים שהיו בדיוק במקום שבו אתה נמצא עכשיו.
          </p>
       
        </div>
        <h3 className={styles.specialSubtitle}>היעוד שלי הוא לתת לך את מה שלי לא היה – מבט מדויק על מי שאתה, וכיוון ברור למי שאתה יכול להיות</h3>
      </section>

    </div>
<ContactForm/>
</>
};

export default AboutMe;