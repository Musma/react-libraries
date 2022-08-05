import { useCallback, useMemo, useState } from 'react'
import { Button, Modal, RadioButton, Table, usePagination } from './components'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Button label="open" onClick={() => setIsOpen(true)} />
      <div className="flex justify-center">
        <RadioButton
          label={`${isOpen}`}
          value={isOpen}
          onChange={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </div>
  )
}

export default App
