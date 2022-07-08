import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox as _Checkbox, CheckboxExample } from '../components/Checkbox'

export default {
  title: 'Components/Checkbox',
  component: _Checkbox,
} as ComponentMeta<typeof _Checkbox>

export const Checkbox: ComponentStory<typeof _Checkbox> = (args) => <CheckboxExample {...args} />
