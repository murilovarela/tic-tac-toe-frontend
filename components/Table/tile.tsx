import type { FC } from "react";

import styles from "./Tile.module.css";
import Player from "../Player";
import EmptyTile from "./EmptyTile";

type Tile = {
  x: number;
  y: number;
  value: "x" | "o" | null;
};

type Props = {
  value: Tile;
};

function getPlayer(value: Tile["value"]) {
  switch (value) {
    case "x":
      return <Player variant="x" />;
    case "o":
      return <Player variant="o" />;
    default:
      return <EmptyTile />;
  }
}

const Tile: FC<Props> = ({ value: { value, x, y } }) => {
  return (
    <div
      className={styles.container}
      style={{ gridColumn: `${x} / ${x}`, gridRow: `${y} / ${y}` }}
    >
      {getPlayer(value)}
    </div>
  );
};

export default Tile;
