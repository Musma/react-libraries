import { useState } from 'react'

import { Button, MusmaProvider, Please } from '@musma/react-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MusmaProvider>
      <Button css={{ color: 'pink' }}>aspodkaspodkaspokd</Button>
      <Please any="1231" css={{ backgroundColor: 'red' }}>
        aspodkaspokdpaosk
      </Please>
    </MusmaProvider>
  )
}

export default App
