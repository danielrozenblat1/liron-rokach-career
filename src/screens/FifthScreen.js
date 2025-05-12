import styles from "./FifthScreen.module.css"
import tired from "../icons/wired-outline-2515-hiring-alt-hover-pinch.json"
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";
import note from "../images/בלי לחץ.png"
const FifthScreen=()=>{
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
  
    {/* <div className={styles.title}>"אבל בלי לחץ אה..?"</div> */}
<div className={styles.imageContainer}><img className={styles.image} src={note}/></div>
    <div className={styles.description}>כל חבר מרשה לעצמו להביע את דעתו, המשפחה שלך כבר מתחילה לשאול אותך שאלות..</div>
        
    <div className={styles.questionRow}>
      <div className={styles.iconContainer}>
        <Player 
          icon={tired} 
          ref={playerRef1} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
      <div className={styles.markedTitle}>״נו? חשבת כבר מה אתה מתכוון לעשות?״</div>
      <div className={styles.iconContainer}>
        <Player 
          icon={tired} 
          ref={playerRef2} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
    </div>
<div className={styles.title}></div>

<div className={styles.description}>מצד אחד - אולי הם צודקים ומצד שני.. מה איתי? זה החיים שלי, לא שלהם!</div>
<div className={styles.title}>בקיצור, מערבולת פנימית</div>

    </>
}
export default FifthScreen