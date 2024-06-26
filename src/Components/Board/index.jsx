import React, { useState } from "react";
import styles from "./style.module.css";
import Box from "../Box";
import X from "../X/Index";
import Win from "../Win";

let cnt = 0;

export default function Board() {
  const [gameStatus, setGameStatus] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [win, setWin] = useState(false);
  // let cnt = 0;

  console.log({ win });

  const handleWin = (index, gameStatus) => {
    console.log("handleWin:", gameStatus);
    let i = index;
    let line = (Math.floor(i / 3)) * 3
    let line2 = Math.floor(i / 3)
    let column = i % 3

    console.log('line: ', line);
    console.log('line2: ', line2);
    console.log('column: ', column);
    console.log('gameStatus[0]: ', gameStatus[0]);
    console.log('gameStatus[4]: ', gameStatus[4]);
    console.log('gameStatus[8]: ', gameStatus[8]);


    // בודק נכונות שורות
    if ((gameStatus[line] == gameStatus[line + 1]) && (gameStatus[line] == gameStatus[line + 2]))
    setTimeout(() => {
      setWin(true);
    }, 1000);

    // בודק נכונות עמודות
    else if ((gameStatus[column] == gameStatus[column + 3]) && (gameStatus[column] == gameStatus[column + 6]))
    setTimeout(() => {
      setWin(true);
    }, 1000);

    // בדיקת נכונות אלכסון משמאל לימין
    else if (line2 == column && (gameStatus[0] == gameStatus[4]) && (gameStatus[4] == gameStatus[8]))
    setTimeout(() => {
      setWin(true);
    }, 1000);

    // בדיקת נכונות אלכסון מימין לשמאל
    else if (((line2 + column) == 2) && (gameStatus[2] == gameStatus[4]) && (gameStatus[2] == gameStatus[6]))
    setTimeout(() => {
      setWin(true);
    }, 1000);

   
    else console.log("continue");
  };
  const handleBoxClick = (index) => {
    if (gameStatus[index] >= 0 && gameStatus[index] <= 8) {
      cnt = cnt + 1;

      const newGameStatus = [...gameStatus];
      newGameStatus[index] = cnt % 2 === 0 ? "o" : "x";

      setGameStatus(newGameStatus);

      // newGameStatus[index] = <X />;
      // cnt % 2 == 0
      //   ? (newGameStatus[index] = "o")
      //   : (newGameStatus[index] = "x");
      // console.log(newGameStatus);

      if (cnt > 4) {
        console.log("cheak if win");
        handleWin(index, newGameStatus);
        // handleWin(index, gameStatus);
        // console.log(win, 'for ', index);
      }
    }


  };
  console.log({ gameStatus });
  console.log("cnt:", cnt);
  console.log('******************************************')

  return (

    <div className={`${styles.Board} Board`}>
      {gameStatus.map((value, index) => (
       !win? <Box
          onClick={() => handleBoxClick(index)}
          gameStatus={gameStatus}
          key={index}
          value={
            gameStatus[index] == "x" ? "x" : gameStatus[index] == "o" ? "o" : ""
          }
        />:<Win 
        gameStatus={gameStatus}
        key={index}
        value={
          gameStatus[index] == "x" ? "x" : gameStatus[index] == "o" ? "o" : ""
        }
        />
      ))}

      {/* ************************שורה לנצחון***************************** */}
      {win ? 'win' : ''}

      {/* <button onClick={handleWin}>test</button> */}

    </div>
  );
}
