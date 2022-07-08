import { useState } from 'react'

import { Checkbox, CheckboxProps } from './Checkbox'

export const CheckboxExample = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  return <Checkbox checked={checked} onChange={() => setChecked(!checked)} {...props} />
}
