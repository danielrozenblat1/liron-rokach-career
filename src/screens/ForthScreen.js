import { useEffect, useRef } from "react"
import ContactForm from "../components/form/Form"
import SyllabusComponent from "../components/silabusss/Silabus"
import EligibilitySection from "../components/whoFits/WhoFits"
import FifthScreen from "./FifthScreen"
import styles from "./ForthScreen.module.css"
import { Player } from "@lordicon/react"
import down from "../icons/wired-outline-2755-arrow-big-down-hover-slide.json"
const ForthScreen=()=>{
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
    <div className={styles.background}>
        <FifthScreen/>
    <div className={styles.description}>אבל אם הגעת לכאן סימן שבאמת אכפת לך לגבי העתיד שלך, אז בוא נדבר תכלס..</div>
    <div className={styles.questionRow}>
      <div className={styles.iconContainer}>
        <Player
          icon={down} 
          ref={playerRef1} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
      <div className={styles.markedTitle}>זו הדרך שלי לוודא שאתה מוצא את הכיוון שלך:</div>
      <div className={styles.iconContainer}>
        <Player 
          icon={down} 
          ref={playerRef2} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
    </div>
<SyllabusComponent/>
<div className={styles.title}>וכדי להיות באמת בטוח שהתהליך בשבילך:</div>
<EligibilitySection/>
<ContactForm/>

</div>
</>

}
export default ForthScreen