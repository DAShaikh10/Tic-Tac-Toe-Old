import leftRibbon from "../../../assets/images/left-ribbon.webp";
import rightRibbon from "../../../assets/images/right-ribbon.webp";
import leftRibbonFallback from "../../../assets/images/fallback/left-ribbon.png";
import rightRibbonFallback from "../../../assets/images/fallback/right-ribbon.png";

import styles from "./Toast.module.css";

function Toast({ winner }: { winner: null | number }) {
  return (
    <div className={styles.container}>
      <picture>
        <source srcSet={leftRibbon} />
        <img src={leftRibbonFallback} alt="" />
      </picture>
      {winner !== null ? (
        <p>Game Over. Player {winner ? "X" : "O"} Wins!</p>
      ) : (
        <p>Game Over. Its a Draw!</p>
      )}
      <picture>
        <source srcSet={rightRibbon} />
        <img src={rightRibbonFallback} alt="" />
      </picture>
    </div>
  );
}

export default Toast;
