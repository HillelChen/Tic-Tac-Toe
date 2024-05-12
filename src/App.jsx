import React from "react";
import Button from "./Components/Button/Index";
import Or from "./Components/Or/Index";
import X from "./Components/X/Index";
import O from "./Components/O/Index";
import Back from "./Components/Back";
import Board from './Components/Board';
import Home from "./Pages/Home";



export default function App() {
  return (
    <div className='app'>
      <Home />
      {/* <Back />
      <Board /> */}

      {/* <Button children={"play solo"} /> */}
      {/* <Or /> */}
      {/* <X />
      <O /> */}
    </div>
  );
}
