import React, { useState } from 'react'
import styles from "./style.module.css"
import Box from '../Box'
import X from '../X/Index'


let cnt = 0
export default function Board() {
  const [gameStatus, setGameStatus] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleBoxClick = (index) => {
    if(gameStatus[index] == 0){
      cnt=cnt+1

      const newGameStatus = [...gameStatus];
      // newGameStatus[index] = <X />;
      newGameStatus[index] = 'x';
      console.log(newGameStatus)
      setGameStatus(newGameStatus);
    }
    
  };
  
  console.log({gameStatus})
  console.log('cnt:', cnt)
 

  return (
    <div className={styles.Board}>
      {gameStatus.map((value, index) => (
        <Box value= {value} key={index} onClick={() => handleBoxClick(index)} />
      ))}
    </div>
  );
}

