import React from 'react'
import Button from './Components/Button/Index'
import Or from './Components/Or/Index'
import Board from './Components/Board'
import HeadComp from './Components/HeadComp'
import Back from './Components/Back'

export default function App() {
  return (
    <div>
  <Back/>
      <Board/>
      working
      <Button children={'play solo'} />
      <Or/>
    </div>
  )
}
