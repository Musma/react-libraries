import { TextInput } from '@musma/react-component'

export const TextInputExample = () => {
  return (
    <div>
      <TextInput type="text" size="lg" />
      <TextInput label={'TextInput Sample'} type="password" />
      <TextInput label={'TextInput Sample'} size="sm" />
    </div>
  )
}
