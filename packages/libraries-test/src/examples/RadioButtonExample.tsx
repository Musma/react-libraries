import { Controller, useForm } from 'react-hook-form'

import { RadioButton } from '@musma/react-component'

type RadioButtonExample = {
  first: string
}

export const RadioButtonExample = () => {
  const { register, control } = useForm<RadioButtonExample>({
    defaultValues: {
      first: 'first',
    },
  })

  return (
    <div>
      <Controller
        name="first"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <RadioButton
            size="sm"
            checked={value === 'first'}
            value="first"
            label="label"
            {...rest}
          />
        )}
      />

      <Controller
        name="first"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <RadioButton
            size="sm"
            checked={value === 'second'}
            value="second"
            label="label"
            {...rest}
          />
        )}
      />
    </div>
  )
}
