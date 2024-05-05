import React from 'react'
import styles from "./style.module.css"
import X from '../X/Index'

export default function Box(value,{...attributes}) {
  return (
    <div className={styles.Box} {...attributes}>{value?<X/>:''} </div>
    
  )
}
