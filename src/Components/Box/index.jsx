import React from 'react'
import styles from "./style.module.css"
import X from '../X/Index'

export default function Box(props) {
 console.log('game', props.gameStatus);
  return (
    <div className={styles.Box} onClick={props.onClick}> 
    {props.value}
    </div>
    
)
}
