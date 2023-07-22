import { useEffect, useState } from "react";

import styles from "./Cell.module.css";

type CellPropsType = {
  index: number;
  marker: string;
  turn: number;
  disabled: boolean;
  reset: boolean;
  updateBoard: CallableFunction;
};

function Cell({
  index,
  marker,
  turn,
  disabled,
  reset,
  updateBoard,
}: CellPropsType) {
  const [player, setPlayer] = useState<number>(turn);
  const [clicked, setClicked] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    setClicked(false);
    setIsFadingOut(true);
    setTimeout(() => setIsFadingOut(false), 150);
  }, [reset]);

  function handleClick(index: number): void {
    setClicked((prevClickState) => {
      if (prevClickState === clicked) setPlayer(turn);
      return true;
    });
    updateBoard(index, turn);
  }

  return (
    <button
      onClick={() => handleClick(index)}
      className={`
      ${reset && styles["reset-button"]}  
      ${isFadingOut && styles["fade-out"]}
      ${
        clicked
          ? player
            ? styles["x-clicked"]
            : styles["o-clicked"]
          : styles.button
      }
      `}
      disabled={clicked || disabled ? true : false}
    >
      {marker}
    </button>
  );
}

export default Cell;
