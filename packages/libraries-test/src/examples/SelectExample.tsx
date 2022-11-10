import { useState } from 'react'

import { Select } from '@musma/react-component'

const options = Array.from({ length: 10 }).map((_, index) => ({
  label: `option_${index}`,
  value: `${index}`,
}))

export const SelectExample = () => {
  const [selected, setSelected] = useState(options[0].value)
  return (
    <div>
      <Select
        label={'Sample Select'}
        value={selected}
        options={options}
        onChange={(value) => setSelected(value)}
        size="lg"
      />

      <Select
        label={'Sample Select'}
        value={selected}
        options={options}
        onChange={(value) => setSelected(value)}
        size="md"
      />

      <Select
        label={'Sample Select'}
        value={selected}
        options={options}
        onChange={(value) => setSelected(value)}
        size="sm"
      />
    </div>
  )
}
