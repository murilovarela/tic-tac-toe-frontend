import type { FC } from "react";

import styles from "./Tile.module.css";
import Player from "../Player";
import EmptyTile from "./emptyTile";

type Tile = {
  x: number;
  y: number;
  value: "x" | "o" | null;
};

type Props = {
  value: Tile;
};

function getPlayer(value: Tile["value"], x: number, y: number) {
  switch (value) {
    case "x":
      return <Player variant="x" />;
    case "o":
      return <Player variant="o" />;
    default:
      return <EmptyTile x={x} y={y} />;
  }
}

const Tile: FC<Props> = ({ value: { value, x, y } }) => {
  return (
    <div
      className={styles.container}
      style={{ gridColumn: `${x} / ${x}`, gridRow: `${y} / ${y}` }}
    >
      {getPlayer(value, x, y)}
    </div>
  );
};

export default Tile;
