import React from 'react'
import styles from "./style.module.css"
import Box from '../Box'


export default function Board() {
  return (
    <div className={styles.Board}>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
    </div>
  )
}
