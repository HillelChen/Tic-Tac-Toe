import React from 'react'
import Box from '../../Components/Box'
import Board from '../../Components/Board'
import styles from "./style.module.css"
import Button from '../../Components/Button/Index'
import Or from '../../Components/Or/Index'
import { Link, useNavigate } from 'react-router-dom'
import useSocket from '../../socket'


export default function JoinOrCreat() {

    // ייבא את סוקט, ואומר לו שכשאשלח בקשה יתחבר לפורט שבקובץ סוקט -3000
    const { socket } = useSocket();

    const nav = useNavigate();

    const handleOnCreateClick = () => {
        nav('/waiting')
    }
    return (
        <div className={styles.join} >
            <div className={styles.font} >
                JOIN TO A GAME
            </div>

            <input className={`Board ${styles.fontCode}`} placeholder='ENTER CODE GAME' ></input>

            <div className={styles.btns}>

                <Button>JOIN</Button>
                <Or></Or>


                {/* <Link to='/waiting'> */}

                <Button onclick={handleOnCreateClick}>CREATE A GAME</Button>

                {/* </Link> */}
            </div>


        </div>
    )
}
