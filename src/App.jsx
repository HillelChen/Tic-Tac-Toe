import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import GameBoard from "./Pages/GameBoard"
import { SocketProvider } from "./socket"
import ChoosePlayer from "./Pages/ChoosePlayer";
import ChoosePlayerActive from "./Pages/ChoosePlayerActive";
import JoinOrCreat from "./Pages/JoinOrCreat";
import Waiting from './Pages/Waiting'




export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="GameBoard" element={<GameBoard />} />
      <Route path="JoinGame" element={<JoinOrCreat />} />
      <Route path="waiting" element={<Waiting />} />
      <Route path="choosePlayer" element={<ChoosePlayer />} />
      <Route path="choosePlayerActive" element={<ChoosePlayerActive />} />
      
    </Routes>
  );
}
