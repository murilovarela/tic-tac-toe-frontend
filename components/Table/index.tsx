import type { FC, ComponentProps } from "react";

import styles from "./Table.module.css";
import Tile from "./tile";
import Bars from "./Bars";

type Props = {
  values: Array<ComponentProps<typeof Tile>["value"]>;
};

function getTableStyle(size: number) {
  const dimension = Math.sqrt(size);
  return {
    gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`,
  };
}

const Table: FC<Props> = ({ values }) => {
  return (
    <div className={styles.container}>
      <Bars size={values.length} />
      <div className={styles.wrapper} style={getTableStyle(values.length)}>
        {values.map((item) => (
          <Tile value={item} key={Object.values(item).join("-")} />
        ))}
      </div>
    </div>
  );
};

export default Table;
