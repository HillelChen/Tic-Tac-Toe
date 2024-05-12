import React from "react";
import GameBoard from "./Pages/GameBoard";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";



export default function App() {
  return (
    <div className='app'>
     <Routes>
<Route index element = {<Home/>}/>
<Route path = "gameBoard" element = {<GameBoard/>}/>

     </Routes>
     
     
      </div>
  );
}
