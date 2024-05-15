import React from 'react'
import styles from "./style.module.css"


export default function Button({ children, onclick }) {
    return (

        <button onClick={onclick} className={styles.button} >
            {children}
        </button>

    )
}
