import React from 'react'
import styles from "./style.module.css"


export default function Button() {
    return (
        <div>
            <button className={styles.button} >
                PLAY SOLO
            </button>
        </div>
    )
}
