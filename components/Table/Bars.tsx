import type { FC } from "react";

import styles from "./Bars.module.css";

type Props = {
  size: number;
};

const Player: FC<Props> = ({ size }) => {
  const dimension = Math.sqrt(size);
  const indexes = Array.from(
    { length: dimension - 1 },
    (_, index) => index + 1
  );
  return (
    <div className={styles.container}>
      <svg width="100%" height="100%" viewBox={`0 0 24 24`} fill="none">
        {indexes.map((index) => (
          <line
            x1={`${(24 / dimension) * index}`}
            y1="1"
            x2={`${(24 / dimension) * index}`}
            y2="23"
            stroke="black"
            strokeWidth="0.6"
            strokeLinecap="round"
            key={`line-vertical-${index}`}
          />
        ))}
        {indexes.map((index) => (
          <line
            x1="1"
            y1={`${(24 / dimension) * index}`}
            x2="23"
            y2={`${(24 / dimension) * index}`}
            stroke="black"
            strokeWidth="0.6"
            strokeLinecap="round"
            key={`line-horizontal-${index}`}
          />
        ))}
      </svg>
    </div>
  );
};

export default Player;
