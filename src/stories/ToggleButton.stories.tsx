import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ToggleButton as _ToggleButton } from '../components/ToggleButton'

export default {
  title: 'Components/ToggleButton',
  component: _ToggleButton,
} as ComponentMeta<typeof _ToggleButton>

const Template: ComponentStory<typeof _ToggleButton> = (args) => <_ToggleButton {...args} />

export const ToggleButton = Template.bind({})
ToggleButton.args = {
  disabled: false,
}
