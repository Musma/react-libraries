import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Checkbox } from '@musma/react-component'

type CheckBoxType = {
  first: boolean
}

export const CheckboxExample = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const { register, control } = useForm<CheckBoxType>({
    defaultValues: {
      first: true,
    },
  })

  return (
    <div css={{ display: 'flex', gap: '16px' }}>
      {/* <Checkbox {...register('first')} size="sm" label="label" /> */}

      <Controller name="first" control={control} render={({ field }) => <Checkbox {...field} />} />
    </div>
  )
}
