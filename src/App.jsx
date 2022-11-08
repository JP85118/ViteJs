import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RelojReact from './Components/RelojReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RelojReact />
    </div>
  )
}

export default App
