import styles from "./NewSecondScreen.module.css"
import { Player } from "@lordicon/react";
import question from "../icons/wired-lineal-424-question-bubble-hover-wiggle.json"
import { useEffect, useRef } from "react";
import tabah from "../images/רוקח חדש טבח מאבטח.png"
// Lucide React icons for benefits section
import { Target, Heart, Briefcase, Smile, Wallet, Shield } from "lucide-react";
import Recommendations from "../components/recommends/Recommends";
import ContactForm from "../components/lightForm/Form";

const SecondScreen = () => {
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
  }, []);
  
  const benefits = [
    { text: "סוף־סוף יהיה לך כיוון ברור", icon: Target },
    { text: "תדע בדיוק מה אתה אוהב ומה מתאים לך", icon: Heart },
    { text: "תדע איך להפוך את זה למקצוע אמיתי", icon: Briefcase },
    { text: "תחווה תחושת משמעות - לא לחץ", icon: Smile },
    { text: "תוכל לבנות מקור הכנסה יציב מהאהבה שלך", icon: Wallet },
    { text: "תהיה בטוח בעצמך מול ההורים, החברים והחיים עצמם", icon: Shield },
  ];

  return <>
    {/* Section 1 - Opening hook */}
    <div className={styles.questionRow}>
      <div className={styles.iconContainer}>
        <Player 
          icon={question} 
          ref={playerRef1} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
      <div className={styles.title}>מה אם אני אגיד לך שהכיוון שלך כבר קיים ואתה פשוט לא יודע לזהות אותו?</div>
      <div className={styles.iconContainer}>
        <Player 
          icon={question} 
          ref={playerRef2} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
    </div>


    {/* Section 2 - Personal story */}
 
    <div className={styles.description}>גם לי זה קרה.. עבדתי בתור טבח ובתור מאבטח</div>
    
    {/* Image placeholder - תמונות כטבח ומאבטח */}
    <div className={styles.imageContainer}>
      <img className={styles.image} src={tabah} alt="לירון כטבח ומאבטח"/>
    </div>
    
    <div className={styles.description}>גררתי את עצמי ממשמרת למשמרת, רק כדי להעסיק את עצמי</div>
    <div className={styles.highlightText}>אבל לא היה לי מושג מה לעשות בצעד הבא שלי!</div>
    <div className={styles.center}>
    <div className={styles.markedTitle}>וכשאני חיפשתי את הבן אדם שיעזור לי.. פשוט לא מצאתי אותו.</div>
    </div>
    {/* Section 3 - The journey */}
    <div className={styles.description}>
      אז התחלתי לחקור ולהבין איך חייל משוחרר בלי טיפת מושג בקבלת החלטות כאלה
      יכול לבחור תחום שהוא יודע ומרגיש שזה הכיוון שבאמת נכון לו
    </div>
    <div className={styles.highlightText}>בלי דילמות ובלי הפחד בלבחור!</div>

    {/* Section 4 - The transformation */}
    <div className={styles.title}>והיום?</div>
    <div className={styles.description}>
      פיתחתי לימודים בתחום הקריירה והNLP לשיטה שעזרה ליותר מ50 חיילים משוחררים
      למצוא את הכיוון שמתאים להם ולבנות תכנית פעולה שמלווה אותם עוד 3 שנים לאחר סיום התהליך!!!
    </div>
    
    <div className={styles.title}>והתגובות..?</div>
    
    {/* Image placeholder - הודעות תודה */}
<Recommendations/>
    {/* Section 5 - Guarantee */}
    <div className={styles.guaranteeBox}>
      <div className={styles.guaranteeText}>
        ואני כל כך בטוח שהשיטה הזאת תעזור לך למצוא את הכיוון שלך
        שאם במידה ועד סוף התהליך עשינו הכל כמו שצריך ולא קיבלת תוצאות
      </div>
      <div className={styles.guaranteeHighlight}>אתה מקבל החזר כספי מלא לחשבון שלך.</div>
      <div className={styles.guaranteeSmall}>בלי אותיות קטנות ובלי חארטות!</div>
    </div>

    <div className={styles.description}>
      וזה כי יש שיטה אחת שיכולה לעזור לך למצוא את הכיוון שלך
      ולהתחיל את החיים שלך בביטחון ובאפס אי ודאות.
    </div>

    {/* Section 6 - Pain points */}
    <div className={styles.warningSection}>
      <div className={styles.warningTitle}>מה יקרה אם לא תטפל בזה עכשיו?</div>
      <div className={styles.warningSubtitle}>בוא נדבר דוגרי:</div>
      <div className={styles.warningText}>
        אם לא תעצור - אתה תזרום למשהו שלא בחרת.
        עוד עבודה זמנית. עוד מקצוע "לסתום חור". עוד כמה שנים של תחושת פספוס.
      </div>
      <div className={styles.warningEmphasis}>
        זה לא כי אתה לא מסוגל. זה פשוט כי בלי כיוון - אין דרך.
      </div>
      <div className={styles.warningCTA}>
        והקורס הזה נועד לתת לך כיוון. לא בעוד שנה. לא אחרי חמישה תארים. עכשיו.
      </div>
    </div>

    {/* Section 7 - Benefits */}
    <div className={styles.benefitsSection}>
      <div className={styles.benefitsTitle}>ומה כן יקרה אם תבחר לעשות את הצעד הזה?</div>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <IconComponent size={26} strokeWidth={1.8} />
              </div>
              <div className={styles.benefitText}>{benefit.text}</div>
            </div>
          );
        })}
      </div>
    </div>
    <ContactForm/>
  </>
}

export default SecondScreen