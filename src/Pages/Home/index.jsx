import React from 'react'
import Button from '../../Components/Button/Index'
// import styles from "./style.module.css"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import Board from '../Components/Board';



export default function Home() { 
    return (

        <>
            <div className='homeButton'>
                <Link to='/GameBoard'>
                    <Button>{'PLAY SOLO'}</Button>
                </Link>
                <Link to='/JoinGame'>
                <Button  >{'PLAY WITH A FRIEND'}</Button>
                </Link>
            </div>
        </>

    )
}
