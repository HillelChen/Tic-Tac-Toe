import React, { useEffect, useState } from 'react'
import Board from '../../Components/Board'
import styles from "./style.module.css"
import useSocket from '../../socket'


export default function Waiting() {
    const socket = useSocket()

    useEffect(() => {
        socket.emit('create-room', {});
        console.log('good morning');
        socket.on('id', (data) => console.log(data))
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
