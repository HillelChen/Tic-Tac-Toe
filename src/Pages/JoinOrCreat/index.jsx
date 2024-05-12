import React from 'react'
import Box from '../../Components/Box'
import Board from '../../Components/Board'
import styles from "./style.module.css"
import Button from '../../Components/Button/Index'
import Or from '../../Components/Or/Index'
import { Link } from 'react-router-dom'


export default function JoinOrCreat() {
    return (
        <div className={styles.join} >
            <div className={styles.font} >
                JOIN TO A GAME
            </div>

            <input className={`Board ${styles.fontCode}`} placeholder='ENTER CODE GAME' ></input>

            <div className={styles.btns}>

                <Button>JOIN</Button>
                <Or></Or>

                <Link to='/waiting'>
                    <Button>CREATE A GAME</Button>
                </Link>
            </div>


        </div>
    )
}
