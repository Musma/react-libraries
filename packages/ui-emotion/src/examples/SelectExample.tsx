import { useState } from 'react'
import { Select } from 'src/components/Select'

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
      />
    </div>
  )
}
