import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App meme-generator">
      < Header />
      < Main />
    </div>
  )
}

export default App
