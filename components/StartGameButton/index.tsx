import type { FC } from "react";
import { useGame } from "../../hooks/useGame";
import Button from "../Button";

const StartGameButton: FC<{}> = () => {
  const { loadingSettings, handleStartGame } = useGame();

  return (
    <Button
      onClick={handleStartGame}
      size="medium"
      fullWidth
      disabled={loadingSettings}
    >
      Play
    </Button>
  );
};

export default StartGameButton;
