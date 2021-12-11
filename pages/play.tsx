import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Shell from "../components/Shell";
import Button from "../components/Button";

const Play: NextPage = () => {
  return (
    <Shell>
      <Button onClick={() => {}} size="medium" fullWidth>
        Play
      </Button>
    </Shell>
  );
};

export default Play;
