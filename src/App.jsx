import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import index from './index.css'
import Info from './components/Info'
import About from './components//About'
import Interests from './components//Interests'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Info />
          <About />
          <Interests />

      </div>
  )
}

export default App
