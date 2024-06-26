import React from "react";
import Button from "../../Components/Button/Index";
// import styles from "./style.module.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcome from "../../Components/Welcome";
import styles from "./style.module.css";
import Back from "../../Components/Back";
import HeadComp from "../../Components/HeadComp";

export default function Home() {
  return (
    <div className={styles.home}>
      <Back />
      <HeadComp />
      <Welcome />
      <Link to="/GameBoard">
        <Button>{"PLAY SOLO"}</Button>
      </Link>
      <Link to="/JoinGame">
        <Button>{"PLAY WITH A FRIEND"}</Button>
      </Link>
    </div>
  );
}
