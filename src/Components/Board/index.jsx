import React, { useState } from 'react'
import styles from "./style.module.css"
import Box from '../Box'
import X from '../X/Index';


export default function Board() {

  const [playerOne, setPlayerOne] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleBoxClick = (index) => {
    if (gameStatus[index] == 0) {
      cnt = cnt + 1

      const newGameStatus = [...gameStatus];
      // newGameStatus[index] = <X />;
      newGameStatus[index] = 'x';
      console.log(newGameStatus)
      setGameStatus(newGameStatus);
    }

  };

  return (

    <div className={styles.Board}>
      {playerOne.map((value, index) => (
        <Box key={index} id={index} onClick={() => handleBoxClick(index)} />
      ))}
    </div>

  )
}
