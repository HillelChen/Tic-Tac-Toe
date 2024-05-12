import React from 'react'
import Box from '../../Components/Box'
import styles from "./style.module.css";

export default function ChoosePlayer () {
  const options = ['o','x']
  const handleChoose=(value)=>{

  }
  return (
    <>
    <div className={styles.font}>choose player </div>
    <div className='Board'>
      {options.map((value,index)=> <Box 
       key={index}
       value = {value}
       onClick = {()=>handleChoose(value)}
       
       />)}
    </div>
    </>
  )
}
