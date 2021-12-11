import { ComponentProps } from "react";
import type { NextPage } from "next";
import Player from "../components/Player";

import Shell from "../components/Shell";
import Table from "../components/Table";
import styles from "../styles/Play.module.css";

const values = [
  {
    x: 1,
    y: 1,
    value: "o",
  },
  {
    x: 1,
    y: 2,
    value: null,
  },
  {
    x: 1,
    y: 3,
    value: "x",
  },
  {
    x: 2,
    y: 1,
    value: null,
  },
  {
    x: 2,
    y: 2,
    value: null,
  },
  {
    x: 2,
    y: 3,
    value: null,
  },
  {
    x: 3,
    y: 1,
    value: null,
  },
  {
    x: 3,
    y: 2,
    value: null,
  },
  {
    x: 3,
    y: 3,
    value: null,
  },
] as ComponentProps<typeof Table>["values"];

const playerTurn = "x";

const Play: NextPage = () => {
  return (
    <Shell>
      <h2 className={styles.turn}>
        {"It's "}
        <span className={styles.player}>
          <Player variant={playerTurn} />
        </span>
        {" 's turn!"}
      </h2>
      <Table values={values} />
    </Shell>
  );
};

export default Play;
