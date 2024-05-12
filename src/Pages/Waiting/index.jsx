import React from 'react'
import Board from '../../Components/Board'
import styles from "./style.module.css"


export default function Waiting() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
