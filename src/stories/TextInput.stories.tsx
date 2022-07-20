import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextInput as _TextInput } from 'src/components/TextInput'

export default {
  title: 'Components/TextInput',
  component: _TextInput,
} as ComponentMeta<typeof _TextInput>

const Template: ComponentStory<typeof _TextInput> = (args) => <_TextInput {...args} />
export const Normal = Template.bind({})
Normal.args = {
  label: 'TextInput',
}
export const Valid = Template.bind({})
Valid.args = {
  label: 'TextInput',
  type: 'password',
  helperText: { type: 'valid', message: 'Assistive Text' },
}
export const Invalid = Template.bind({})
Invalid.args = {
  label: 'TextInput',
  helperText: { type: 'invalid', message: 'Assistive Text' },
}
export const Search = Template.bind({})
Search.args = {
  label: 'Search',
  type: 'search',
  handleSearchClick: () => {
    alert('Search Clicked')
  },
}
