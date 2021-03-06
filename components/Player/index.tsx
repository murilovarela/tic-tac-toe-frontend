import type { FC } from "react";

type Props = {
  variant: "x" | "o";
};

const Player: FC<Props> = ({ variant }) => {
  return variant === "x" ? (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20L4 4.00003M20 4L4.00002 20"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default Player;
