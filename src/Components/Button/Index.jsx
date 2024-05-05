import React from 'react'
import styles from "./style.module.css"


export default function Button({ children }) {
    return (
        <div>
            <button className={styles.button} >
                {children}
            </button>
        </div>
    )
}
