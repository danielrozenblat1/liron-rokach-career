import styles from "./SecondScreen.module.css"
import hoger from "../images/רוקח השתחרר.png"
import { Player } from "@lordicon/react";
import question from "../icons/wired-lineal-424-question-bubble-hover-wiggle.json"
import { useEffect, useRef } from "react";
import kivun from "../images/שביל הגורל.png"
import IconTextComponent from "../components/can/Can";
import learn from "../icons/wired-outline-2166-graduation-scroll-hover-pinch.json"

import trip from "../icons/wired-outline-111-bagpack-hover-zip.json"
import Works from "../components/recommends/Works";

const SecondScreen = () => {
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };
  
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
  }, []);
  
  return <>
    <div className={styles.title}>מברוק,סיימת צבא!</div>
    <div className={styles.description}>במשך כל השירות תכננת את היום הגדול הזה -  לקחת את מספריים, לגזור את החוגר ולצעוק סלאמת לצעירים ! </div>
   
    <div className={styles.title}>והרגע הזה הגיע</div>
    <div className={styles.imageContainer}><img className={styles.image} src={hoger} alt="גזירת חוגר"/></div>
    <div className={styles.description}>עברו כמה חודשים, החופש מתחיל להרגיש כמו שגרה שלא נגמרת, כל יום מרגיש אותו הדבר ועם הזמן מתחילה לעלות לך השאלה</div>
    
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
      <div className={styles.markedTitle}>אוקי.. מה עכשיו?</div>
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


  </>
}

export default SecondScreen