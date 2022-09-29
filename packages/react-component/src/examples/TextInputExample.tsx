import { TextInput } from 'src/components'

export const TextInputExample = () => {
  return (
    <div>
      <TextInput type="text" size="lg" />
      <TextInput label={'TextInput Sample'} type="password" size="lg" />
      <TextInput label={'TextInput Sample'} size="lg" />
    </div>
  )
}
