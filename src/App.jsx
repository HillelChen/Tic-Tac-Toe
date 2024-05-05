import React from 'react'
import Button from './Components/Button/Index'
import Or from './Components/Or/Index'
import X from './Components/X/Index'
import O from './Components/O/Index'

export default function App() {
  return (

    <div className='app'>
  
  <Back/>
      <Board/>
      working

   
      <Button children={'play solo'} />
      <Or />
      <X />
      <O />

      <Button children={'play solo'} />
      <Or/>
    </div>
  )
}
