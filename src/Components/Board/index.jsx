import React, { useState } from "react";
import styles from "./style.module.css";
import Box from "../Box";
import X from "../X/Index";

let cnt = 2;
export default function Board() {
  const [gameStatus, setGameStatus] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [win, setWin] = useState(false);
  const handleWin = (index, gameStatus) => {
    console.log("handleWin:", gameStatus);
    let i = index;
    console.log('i:',i);
    if (gameStatus[i] == gameStatus[i + 1]) {
      if (
        gameStatus[i] == gameStatus[i + 2] ||
        gameStatus[i] == gameStatus[i - 1]
      ) {
        setWin(true);
      }
    } else if (gameStatus[i] == gameStatus[i - 1]) {
      if (gameStatus[i] == gameStatus[i - 2]) {
        setWin(true);
      }
    } else if (gameStatus[i] == gameStatus[i + 3]) {
      if (
        gameStatus[i] == gameStatus[i + 6] ||
        gameStatus[i] == gameStatus[i - 3]
      ) {
        setWin(true);
      }
    } else if (gameStatus[i] == gameStatus[i - 3]) {
      if (gameStatus[i] == gameStatus[i - 6]) {
        setWin(true);
      }
    } else console.log("continue");
  };
  const handleBoxClick = (index) => {
    if (gameStatus[index] >= 0 && gameStatus[index] <= 8) {
      cnt = cnt + 1;
      
      const newGameStatus = [...gameStatus];
      // newGameStatus[index] = <X />;
      cnt % 2 == 0
      ? (newGameStatus[index] = "o")
      : (newGameStatus[index] = "x");
      console.log(newGameStatus);
      setGameStatus(newGameStatus);
    }
    if (cnt > 6) {
      console.log("cheak if win");
      handleWin(index, gameStatus);
      console.log(win);
    }
  };

  console.log({ gameStatus });
  console.log("cnt:", cnt);

  return (
    <div className={styles.Board}>
      {gameStatus.map((value, index) => (
        <Box
          gameStatus={gameStatus}
          key={index}
          onClick={() => handleBoxClick(index)}
          value={
            gameStatus[index] == "x" ? "x" : gameStatus[index] == "o" ? "o" : ""
          }
        />
      ))}
    </div>
  );
}
