import styles from "./Spinner.module.css";
import Player from "../Player";

const Spinner = () => {
  return (
    <div className={styles.container} data-cy="spinner">
      <div className={styles.wrapper}>
        <div className={styles.xAnimation}>
          <Player variant="x" />
        </div>
        <div className={styles.oAnimation}>
          <Player variant="o" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
