import { useState } from 'react'

import { RadioButton } from 'src/components'

export const RadioButtonExample = () => {
  const [selected, setSelected] = useState('one')
  return (
    <div>
      <RadioButton
        selected={selected}
        value={'one'}
        onChange={(value) => setSelected(value)}
        label="one"
      />
      <RadioButton
        selected={selected}
        value={'two'}
        onChange={(value) => setSelected(value)}
        label="two"
      />
      <RadioButton
        selected={selected}
        value={'three'}
        onChange={(value) => setSelected(value)}
        label="three"
      />
    </div>
  )
}
