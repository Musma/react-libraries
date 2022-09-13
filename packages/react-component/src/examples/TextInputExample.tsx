import { useTheme } from '@emotion/react'

import { TextInput } from 'src/components'

export const TextInputExample = () => {
  const theme = useTheme()
  return (
    <div>
      <TextInput type="text" size="lg" />
      <TextInput label={'TextInput Sample'} type="password" size="lg" />
      <TextInput label={'TextInput Sample'} type="search" size="lg" />
    </div>
  )
}
