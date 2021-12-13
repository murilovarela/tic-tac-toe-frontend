import { createContext, useContext, useState, useEffect } from "react";
import type { FC, PropsWithChildren } from "react";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/router";
import axios from "axios";

type UserFigure = "x" | "o";

type ContextProps = {
  setUserFigure: (figure: UserFigure) => void;
  userFigure: UserFigure;
  selectTile: (x: number, y: number) => void;
  loadingSettings: boolean;
  handleStartGame: () => void;
  userId: string;
  board: any;
  currentTurn: UserFigure;
  waitingForPlayers: boolean;
};

export const GameContext = createContext<ContextProps>({
  setUserFigure: () => {},
  selectTile: () => {},
  userFigure: "x",
  loadingSettings: true,
  handleStartGame: () => {},
  userId: "",
  board: null,
  currentTurn: "x",
  waitingForPlayers: false,
});

function parseBoard(boardData: string, userId: string, userFigure: string) {
  const board = boardData.split(";");
  const [oponentsFigure] = ["x", "o"].filter((item) => item !== userFigure);
  return board.map((item) => {
    const [x, y, playerId] = item.split("+");

    return {
      x,
      y,
      value:
        playerId === userId
          ? userFigure
          : playerId === "playerId"
          ? null
          : oponentsFigure,
    };
  });
}

export const GameProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const [userFigure, setUserFigure] = useState<UserFigure>("x");
  const [userId, setUserId] = useState<string | null>(null);
  const [loadingSettings, setLoadingSettings] = useState<boolean>(true);
  const [waitingForPlayers, setWaitingForPlayers] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [board, setBoard] = useState<any>(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:4000/");

    setSocket(socketInstance);
    return () => {
      socketInstance.close();
    };
  }, [setSocket]);

  useEffect(() => {
    if (router.pathname === "/") {
      localStorage.removeItem("gamingRoomId");
    }
  }, [router]);

  useEffect(() => {
    if (router.pathname === "/play") {
      const gamingRoomId = localStorage.getItem("gamingRoomId");
      if (gamingRoomId) {
        socket?.emit("enter_gaming_room", `${gamingRoomId}@${userId}`);
      } else {
        router.push("/");
      }
    }
  }, [socket, userId, router]);

  useEffect(() => {
    if (userId && socket) {
      socket.on(`${userId}:gaming_room`, (data: string) => {
        localStorage.setItem("gamingRoomId", data);
        router.push("/play");
      });

      socket.on(`${userId}:gaming_room_board`, (data: string) => {
        setBoard(parseBoard(data, userId, userFigure));
      });

      socket.on(`${userId}:gaming_room_update`, (data: string) => {
        setBoard(parseBoard(data, userId, userFigure));
      });

      socket.on(`${userId}:waiting_room`, (data: string) => {
        setWaitingForPlayers(true);
      });
    }

    return () => {
      if (socket && userId) {
        socket.off(userId);
      }
    };
  }, [userId, socket, router, userFigure]);

  function handleSetUserFigure(figure: UserFigure) {
    setUserFigure(figure);
    localStorage.setItem("userFigure", figure);
  }

  function handleSelectTile(x: number, y: number) {
    const gamingRoomId = localStorage.getItem("gamingRoomId");
    socket?.emit(
      "add_turn_to_gaming_room",
      `${gamingRoomId}@${x}+${y}+${userId}`
    );
  }

  function handleStartGame() {
    socket?.emit("enter_waiting_room", userId);
  }

  useEffect(function setupGame() {
    async function authenticate() {
      try {
        const storedUserId = localStorage.getItem("userId");

        const { data: userIdResponse } = await axios.post(
          "http://localhost:4000/authenticate",
          { playerId: storedUserId }
        );

        localStorage.setItem("userId", userIdResponse);

        setUserId(userIdResponse);
        const storedUserFigure = localStorage.getItem(
          "userFigure"
        ) as UserFigure;
        setUserFigure(storedUserFigure ?? "x");
        setLoadingSettings(false);
      } catch (error) {
        console.log(error);
      }
    }

    authenticate();
  }, []);

  return (
    <GameContext.Provider
      value={{
        setUserFigure: handleSetUserFigure,
        selectTile: handleSelectTile,
        userFigure,
        userId: userId || "",
        loadingSettings,
        handleStartGame,
        board,
        currentTurn: board?.at(-1).value === "x" ? "o" : "x",
        waitingForPlayers,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
