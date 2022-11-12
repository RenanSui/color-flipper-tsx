import { useState } from 'react'
import './main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-blue-600">
      <h1>Hello World</h1>
      <p className="text-3xl font-bold underline">Hello World</p>
      <h1 className="text-xl font-medium text-yellow-200">
    Hello world!
  </h1>
    </div>
  )
}

export default App
