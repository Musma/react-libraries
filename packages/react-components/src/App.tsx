import { useState } from 'react'
import './App.css'
import { Button } from 'src/components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button label="test" variant="outlined" />
      <Button label="test" variant="contained" />
      <Button label="test" variant="danger" />
    </div>
  )
}

export default App
