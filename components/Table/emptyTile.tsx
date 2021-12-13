import type { FC } from "react";
import { useGame } from "../../hooks/useGame";
import Player from "../Player";

import styles from "./EmptyTile.module.css";

type Props = {
  x: number;
  y: number;
};

const EmptyTile: FC<Props> = ({ x, y }) => {
  const { userFigure, selectTile } = useGame();
  return (
    <button
      className={styles.btn}
      onClick={() => selectTile(x, y)}
      aria-label={`tile ${x} ${y}`}
    >
      <Player variant={userFigure} />
    </button>
  );
};

export default EmptyTile;
