import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { TextInput } from 'src/components'

export const TextInputExample = () => {
  const theme = useTheme()
  return (
    <div>
      <TextInput
        label={'TextInput Sample'}
        type="text"
        size="lg"
        // helperText={{ message: 'helper text', type: 'valid' }}
      />
      <TextInput label={'TextInput Sample'} type="password" size="lg" />
      <TextInput label={'TextInput Sample'} type="search" size="lg" />
    </div>
  )
}
