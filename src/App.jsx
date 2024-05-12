import React from "react";
import Button from "./Components/Button/Index";
import Or from "./Components/Or/Index";
import X from "./Components/X/Index";
import O from "./Components/O/Index";
import Back from "./Components/Back";
import Board from './Components/Board';
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
import GameBoard from "./Pages/GameBoard"
import JoinOrCreat from "./Pages/JoinOrCreat";
import Waiting from "./Pages/Waiting";




export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="GameBoard" element={<GameBoard />} />
      <Route path="joinorcreat" element={<JoinOrCreat />} />
      <Route path="waiting" element={<Waiting />} />

    </Routes>
  );
}
