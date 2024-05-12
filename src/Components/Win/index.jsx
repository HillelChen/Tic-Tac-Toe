import React from 'react'
import styles from "./style.module.css"
import X from '../X/Index'

export default function Win(props) {
 
  return (
    <div  className={styles.Win} > 
    {props.value}
    </div>
    
)
}