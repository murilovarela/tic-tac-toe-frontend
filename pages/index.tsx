import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import PlayerSelection from "../components/PlayerSelection";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic-tac-toe</title>
        <meta name="description" content="A online tic-tac-toe game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <PlayerSelection />
      </main>

      <footer className={styles.footer}>
        <p>
          {"Made with love by "}
          <a
            href="https://www.linkedin.com/in/murilo-varela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Murilo Varela
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
