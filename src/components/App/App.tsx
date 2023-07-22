import { useState } from "react";

import { Button } from "./Button";
import { Card } from "./Card";
import { Board } from "../Board";
import { Toast } from "./Toast";

import { buttonData } from "../../utils/helper";

import styles from "./App.module.css";

type playerStatsTypes = {
  playerX: number;
  draw: number;
  playerO: number;
};

function App() {
  const [turn, setTurn] = useState<number>(1); // Player X's turn: 1 & Player O's turn: 0.
  const [gameStatus, setGameStatus] = useState<number>(0); // Game in-progress: 1 & Game has concluded or not begin yet: 0.
  const [winner, setWinner] = useState<undefined | null | number>(undefined); // Winner is not determined yet: undefined, Draw: null, winner: 1 || 0.
  const [playerStats, setPlayerStats] = useState<playerStatsTypes>({
    playerX: 0,
    draw: 0,
    playerO: 0,
  });

  function updateTurn(): void {
    setTurn(Number(!turn));
  }

  function updateGameStatus(turn: number | null): void {
    setGameStatus(Number(!gameStatus));
    if (turn !== null) {
      setWinner(turn);
      setPlayerStats((prevPlayerStats) => {
        if (turn) {
          return {
            ...prevPlayerStats,
            playerX: prevPlayerStats.playerX++,
          };
        } else {
          return {
            ...prevPlayerStats,
            playerO: prevPlayerStats.playerO++,
          };
        }
      });
    } else {
      setWinner(null);
      setPlayerStats((prevPlayerStats) => ({
        ...prevPlayerStats,
        draw: prevPlayerStats.draw++,
      }));
    }
  }

  function reInitGame(): void {
    setGameStatus(Number(!gameStatus));
    setTurn(1);
    setWinner(undefined);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>tic.</p>
        <p>tac.</p>
        <p>toe.</p>
      </div>

      <div className={styles["game-container"]}>
        <div>
          <Card
            title="player x"
            count={playerStats.playerX}
            bgColor="#48d2fe"
          />

          <Card title="draw" count={playerStats.draw} bgColor="#bcdbf9" />

          <Card
            title="player o"
            count={playerStats.playerO}
            bgColor="#e2be00"
          />
        </div>
        <Board
          turn={turn}
          disabled={gameStatus ? false : true}
          updateTurn={updateTurn}
          updateGameStatus={updateGameStatus}
        />
        {winner !== undefined &&
          (winner !== null ? (
            <Toast winner={winner} />
          ) : (
            <Toast winner={winner} />
          ))}
        {gameStatus ? (
          <p className={turn ? styles["player-x"] : styles["player-o"]}>
            {turn ? "X" : "O"} turn
          </p>
        ) : (
          <button onClick={reInitGame}>New Game</button>
        )}
      </div>

      <div className={styles.actions}>
        {buttonData.map((props, index) => (
          <Button key={index} {...props} />
        ))}
      </div>
    </div>
  );
}

export default App;
