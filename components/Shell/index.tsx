import type { FC, PropsWithChildren } from "react";
import Head from "next/head";
import styles from "./Shell.module.css";

const Shell: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic-tac-toe</title>
        <meta name="description" content="A online tic-tac-toe game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <div className={styles.game}>{children}</div>
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

export default Shell;
