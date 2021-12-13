import type { NextPage } from "next";

import Shell from "../components/Shell";
import Table from "../components/Table";

const playerTurn = "x";

const Play: NextPage = () => {
  return (
    <Shell>
      <Table />
    </Shell>
  );
};

export default Play;
