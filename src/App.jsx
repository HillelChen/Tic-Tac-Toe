import React from 'react'
import Button from './Components/Button/Index'
import Or from './Components/Or/Index'

export default function App() {
  return (
    <div>
      <Button children={'play solo'} />
      <Or />
      <Button children={'play solo'} />
    </div>
  )
}
