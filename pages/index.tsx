import type { NextPage } from "next";

import Shell from "../components/Shell";
import PlayerSelection from "../components/PlayerSelection";
import StartGameButton from "../components/StartGameButton";

const Home: NextPage = () => {
  return (
    <Shell>
      <PlayerSelection />
      <StartGameButton />
    </Shell>
  );
};

export default Home;
