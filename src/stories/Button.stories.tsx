import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button as _Button } from 'src/components/Button'

export default {
  title: 'Components/Button',
  component: _Button,
} as ComponentMeta<typeof _Button>

const Template: ComponentStory<typeof _Button> = (args) => <_Button {...args} />
export const Button = Template.bind({})
Button.args = {
  label: 'Button',
}
