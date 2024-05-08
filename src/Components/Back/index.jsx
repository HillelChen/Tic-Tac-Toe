import React from 'react'
import { LuUndo } from "react-icons/lu";
import styles from "./style.module.css"

export default function index() {
  return (
    <div className={styles.back}>
      <LuUndo className={styles.backarrow} />
    </div>
  )
}

