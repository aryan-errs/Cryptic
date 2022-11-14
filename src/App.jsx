import { useState } from 'react'
import './App.css'
import React from 'react'
import { Form } from './components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App
