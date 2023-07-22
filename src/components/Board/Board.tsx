import { useState } from "react";

import { Cell } from "./Cell";
import { isWinner, isTie } from "../../utils/helper";

import styles from "./Board.module.css";

type BoardPropsType = {
  turn: number;
  disabled: boolean;
  updateTurn: CallableFunction;
  updateGameStatus: CallableFunction;
};

function Board({
  turn,
  disabled,
  updateTurn,
  updateGameStatus,
}: BoardPropsType) {
  const initBoardState: string[] = ["", "", "", "", "", "", "", "", ""];
  const [reset, setReset] = useState<boolean>(false);
  const [board, setBoard] = useState<string[]>(initBoardState);

  function updateBoard(index: number, player: string): void {
    const marker: string = player ? "X" : "O";
    const newBoardState: string[] = [
      ...board.slice(0, index),
      marker,
      ...board.slice(index + 1),
    ];

    setBoard(newBoardState);
    updateTurn();
    if (isWinner(newBoardState)) {
      setBoard(initBoardState);
      updateGameStatus(turn);
      setReset(!reset);
    }
    if (isTie(newBoardState)) {
      setBoard(initBoardState);
      updateGameStatus(null);
      setReset(!reset);
    }
  }

  return (
    <table className={styles.board}>
      <tbody>
        <tr>
          {board.slice(0, 3).map((value, index) => (
            <td key={index}>
              <Cell
                index={index}
                marker={value}
                turn={turn}
                disabled={disabled}
                reset={reset}
                updateBoard={updateBoard}
              />
            </td>
          ))}
        </tr>
        <tr>
          {board.slice(3, 6).map((value, index) => (
            <td key={index + 3}>
              <Cell
                index={index + 3}
                marker={value}
                turn={turn}
                disabled={disabled}
                reset={reset}
                updateBoard={updateBoard}
              />
            </td>
          ))}
        </tr>
        <tr>
          {board.slice(6).map((value, index) => (
            <td key={index + 6}>
              <Cell
                index={index + 6}
                marker={value}
                turn={turn}
                disabled={disabled}
                reset={reset}
                updateBoard={updateBoard}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Board;
