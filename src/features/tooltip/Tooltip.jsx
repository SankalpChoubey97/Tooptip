import { useOutletContext } from "react-router-dom";
import styles from "./Tooltip.module.css";

export function Tooltip() {
  const position = useOutletContext(); // receives 'left', 'right', 'top', or 'bottom'

  return (
    <div className={styles.tooltipWrapper}>
      <button className={styles.tooltipButton}>Hover me</button>
      <div className={`${styles.tooltipText} ${styles[position]}`}>
        Tooltip on {position}
      </div>
    </div>
  );
}
