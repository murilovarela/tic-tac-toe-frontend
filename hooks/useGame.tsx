import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

type UserFigure = "x" | "o";

type ContextProps = {
  setUserFigure: (figure: UserFigure) => void;
  userFigure: UserFigure;
  selectTile: (x: number, y: number) => void;
  loadingSettings: boolean;
  handleStartGame: () => void;
};

export const GameContext = createContext<ContextProps>({
  setUserFigure: () => {},
  selectTile: () => {},
  userFigure: "x",
  loadingSettings: true,
  handleStartGame: () => {},
});

export const GameProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const [userFigure, setUserFigure] = useState<UserFigure>("x");
  const [loadingSettings, setLoadingSettings] = useState<boolean>(true);

  function handleSetUserFigure(figure: UserFigure) {
    setUserFigure(figure);
    localStorage.setItem("userFigure", figure);
  }

  function handleSelectTile(x: number, y: number) {
    console.log(x, y);
  }

  function handleStartGame() {
    console.log("start the game");
    router.push("/play");
  }

  useEffect(function setupGame() {
    const storedUserFigure = localStorage.getItem("userFigure") as UserFigure;
    setUserFigure(storedUserFigure ?? "x");
    setLoadingSettings(false);
  }, []);

  return (
    <GameContext.Provider
      value={{
        setUserFigure: handleSetUserFigure,
        selectTile: handleSelectTile,
        userFigure,
        loadingSettings,
        handleStartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
