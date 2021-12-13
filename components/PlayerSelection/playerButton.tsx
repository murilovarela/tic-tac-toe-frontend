import type { FC, ComponentProps } from "react";
import styles from "./PlayerButton.module.css";
import Player from "../Player";

type Props = {
  onClick: () => void;
  variant: ComponentProps<typeof Player>["variant"];
  selected: boolean;
};

const PlayerButton: FC<Props> = ({ onClick, variant, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${selected ? styles.active : ""}`}
      data-cy={`figure-btn-${variant}`}
    >
      <Player variant={variant} />
    </button>
  );
};

export default PlayerButton;
