import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import { Checkbox as _Checkbox } from '../components/Checkbox'

export default {
  title: 'Components/Checkbox',
  component: _Checkbox,
} as ComponentMeta<typeof _Checkbox>

const Template: ComponentStory<typeof _Checkbox> = (args) => {
  const [checked, setChecked] = useState(false)
  return <_Checkbox checked={checked} onChange={() => setChecked(!checked)} {...args} />
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  disabled: false,
}
