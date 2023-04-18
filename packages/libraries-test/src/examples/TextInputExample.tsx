import { TextInput } from '@musma/react-component'

export const TextInputExample = () => {
  return (
    <div>
      <TextInput
        type="text"
        size="lg"
        label="!23"
        required={true}
        onChange={() => {
          return
        }}
      />
      <TextInput
        label={'TextInput Sample'}
        type="password"
        required={true}
        onChange={() => {
          return
        }}
      />
      <TextInput
        label={'TextInput Sample'}
        size="sm"
        required={true}
        onChange={() => {
          return
        }}
      />
    </div>
  )
}
