import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottolse from './componant/Bottoles/Bottolse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Bottolse></Bottolse>
    </>
  )
}

export default App
