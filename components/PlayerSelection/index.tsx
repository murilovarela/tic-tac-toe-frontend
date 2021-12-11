import type { FC, ComponentProps } from "react";
import { useState } from "react";
import PlayerButton from "./playerButton";
import styles from "./PlayerSelection.module.css";

const PlayerSelection: FC = () => {
  const [selected, setSelected] =
    useState<ComponentProps<typeof PlayerButton>["variant"]>("x");

  return (
    <div className={styles.container}>
      <PlayerButton
        variant="x"
        onClick={() => setSelected("x")}
        selected={selected === "x"}
      />
      <PlayerButton
        variant="o"
        onClick={() => setSelected("o")}
        selected={selected === "o"}
      />
    </div>
  );
};

export default PlayerSelection;
