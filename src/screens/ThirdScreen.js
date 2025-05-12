import styles from "./ThirdScreen.module.css"
import kivun from "../images/שביל הגורל.png"
import IconTextComponent from "../components/can/Can";
import learn from "../icons/wired-outline-2166-graduation-scroll-hover-pinch.json"
import work from "../icons/wired-outline-1005-b-2-b-business-to-business-hover-pinch.json"
import trip from "../icons/wired-outline-111-bagpack-hover-zip.json"
const ThirdScreen=()=>{

    return <>
    <div className={styles.background}>
    <div className={styles.description}>ככל שעובר הזמן חלק מהחברים מתחילים למצוא כיוון, חלק כבר ידעו בדיוק לאן הם יוצאים, אבל אתה... אתה עדיין לא יודע איפה אתה הולך להיות אפילו בשלוש שנים הקרובות (ושלא נדבר על העתיד הרחוק)</div>
    <div className={styles.imageContainer}><img className={styles.image} src={kivun} alt="גזירת חוגר"/></div>
    <div className={styles.description}>אני בטוח שהמוח שלך עובד שעות נוספות</div>
<div className={styles.title}>וכל מה שעובר לך בראש בזמן האחרון זה:</div>
<div className={styles.row}>
<IconTextComponent text="אולי אעשה פשוט תואר כמו כולם ומשם אתגלגל" icon={learn}/>
<IconTextComponent text="אלך לעבוד במועדפת ועד אז כבר אמצא כיוון" icon={work}/>
<IconTextComponent text="נחכה עד לטיול הגדול.. עד אז נשאר ככה" icon={trip}/>
</div>
<div className={styles.description}>ועוד מליון ואחד גורמים</div>
<div className={styles.title}>אז אני כאן לעשות לך סדר בבלאגן</div>
</div>
    </>
}
export default ThirdScreen