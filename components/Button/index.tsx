import type { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

type Props = {
  onClick: () => void;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
};

const Button: FC<PropsWithChildren<Props>> = ({
  onClick,
  size = "small",
  fullWidth = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[size]} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
