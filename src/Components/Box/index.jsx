import React from 'react'
import styles from "./style.module.css"
import X from '../X/Index'

export default function Box(props) {

  return (
    <div className={styles.Box} onClick={props.onClick}>
      <p> {props.value}</p>
    </div>

  )
}
