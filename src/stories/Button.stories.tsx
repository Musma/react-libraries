import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button as _Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: _Button,
} as ComponentMeta<typeof _Button>

const Template: ComponentStory<typeof _Button> = (args) => <_Button {...args} />
export const Button = Template.bind({})
Button.args = {
  label: 'Button',
}
