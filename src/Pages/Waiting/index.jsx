import React, { useEffect } from 'react'
import Board from '../../Components/Board'
import styles from "./style.module.css"
import useSocket from '../../socket'


export default function Waiting() {
    const { socket } = useSocket()

    useEffect(() => {
        socket.emit('create-room')

    }, [])


    return (

        <>

            <div className={`Board ${styles.box} ${styles.font}`}>
                16789
                <div className={` ${styles.onBox}`}>
                    your code
                </div>
            </div>

            <div className={styles.font}>
                WAITING FOR OPPONENT
            </div>
        </>
    )
}
