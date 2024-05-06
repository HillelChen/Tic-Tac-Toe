import React, { useState } from 'react'
import styles from "./style.module.css"
import Box from '../Box'
import X from '../X/Index'


let cnt = 2
export default function Board() {
  const [gameStatus, setGameStatus] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleBoxClick = (index) => {
   
    if(gameStatus[index] == 0){
      cnt=cnt+1

      const newGameStatus = [...gameStatus];
      // newGameStatus[index] = <X />;
     cnt%2==0? newGameStatus[index] = 'x':newGameStatus[index]='o';
      console.log(newGameStatus)
      setGameStatus(newGameStatus);
    }
    
  };
  
  console.log({gameStatus})
  console.log('cnt:', cnt)
 

  return (
    <div className={styles.Board}>
      {gameStatus.map((value, index) => (
      <Box 
        gameStatus={gameStatus} 
        key={index} 
        onClick={() => handleBoxClick(index)} 
         value={gameStatus[index]=='x'?'x':gameStatus[index]=='o'?'o':''}
        />
      ))}
    </div>
  );
}

