import type { FC } from "react";

import styles from "./Table.module.css";
import Tile from "./tile";
import Bars from "./bars";
import { useGame } from "../../hooks/useGame";
import Spinner from "../spinner";
import Player from "../Player";
import Link from "next/link";

function getTableStyle(size: number) {
  const dimension = Math.sqrt(size);
  return {
    gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`,
  };
}

const Table: FC<{}> = () => {
  const { board, currentTurn } = useGame();

  if (!board) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className={styles.turn}>
        {"It's "}
        <span className={styles.player}>
          <Player variant={currentTurn} />
        </span>
        {" 's turn!"}
      </h2>
      <div className={styles.container}>
        <Bars size={board.length} />
        <div className={styles.wrapper} style={getTableStyle(board.length)}>
          {board.map((item: any) => (
            <Tile value={item} key={Object.values(item).join("-")} />
          ))}
        </div>
      </div>
      <Link href="/">
        <a className={styles.leave}>Leave this game</a>
      </Link>
    </>
  );
};

export default Table;
