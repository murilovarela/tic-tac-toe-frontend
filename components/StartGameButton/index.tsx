import type { FC } from "react";
import { useGame } from "../../hooks/useGame";
import Button from "../Button";
import Spinner from "../spinner";
import styles from "./StartGameButton.module.css";

const StartGameButton: FC<{}> = () => {
  const { loadingSettings, handleStartGame, userId, waitingForPlayers } =
    useGame();

  return (
    <>
      <Button
        onClick={handleStartGame}
        size="medium"
        fullWidth
        disabled={loadingSettings || waitingForPlayers}
        data-cy="start-btn"
      >
        {waitingForPlayers ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          "Play"
        )}
      </Button>
      <p>User ID: {userId}</p>
    </>
  );
};

export default StartGameButton;
