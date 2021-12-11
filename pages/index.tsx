import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Shell from "../components/Shell";
import PlayerSelection from "../components/PlayerSelection";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <Shell>
      <PlayerSelection />
      <Button onClick={() => {}} size="medium" fullWidth>
        Play
      </Button>
    </Shell>
  );
};

export default Home;
