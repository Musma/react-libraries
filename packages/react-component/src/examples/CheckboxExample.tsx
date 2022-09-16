import { useState } from 'react'

import { css } from '@emotion/css'

import { Checkbox } from 'src/components'

export const CheckboxExample = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  return (
    <div className={css({ display: 'flex', gap: '16px' })}>
      <Checkbox
        checked={checked1}
        onChange={(checked) => setChecked1(checked)}
        size="sm"
        label="label"
      />
      <Checkbox
        checked={checked2}
        onChange={(checked) => setChecked2(checked)}
        size="md"
        label="label"
      />
      <Checkbox
        checked={checked3}
        onChange={(checked) => setChecked3(checked)}
        size="lg"
        label="label"
      />
      <Checkbox
        checked={checked1}
        onChange={(checked) => setChecked1(checked)}
        size="sm"
        disabled
      />
      <Checkbox
        checked={checked2}
        onChange={(checked) => setChecked2(checked)}
        size="md"
        disabled
      />
      <Checkbox
        checked={checked3}
        onChange={(checked) => setChecked3(checked)}
        size="lg"
        disabled
      />
    </div>
  )
}
