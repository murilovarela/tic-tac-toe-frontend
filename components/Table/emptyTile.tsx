import type { FC } from "react";

import styles from "./EmptyTile.module.css";

const EmptyTile: FC<{}> = () => {
  return <button className={styles.btn} />;
};

export default EmptyTile;
