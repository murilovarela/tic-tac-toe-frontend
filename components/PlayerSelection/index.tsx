import type { FC } from "react";
import { useGame } from "../../hooks/useGame";
import Spinner from "../spinner";
import PlayerButton from "./playerButton";
import styles from "./PlayerSelection.module.css";

const PlayerSelection: FC = () => {
  const { userFigure, setUserFigure, loadingSettings } = useGame();

  if (loadingSettings) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <PlayerButton
        variant="x"
        onClick={() => setUserFigure("x")}
        selected={userFigure === "x"}
      />
      <PlayerButton
        variant="o"
        onClick={() => setUserFigure("o")}
        selected={userFigure === "o"}
      />
    </div>
  );
};

export default PlayerSelection;
