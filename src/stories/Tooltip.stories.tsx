import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip as _Tooltip } from '../components/Tooltip'

export default {
  title: 'Components/Tooltip',
  component: _Tooltip,
} as ComponentMeta<typeof _Tooltip>

const Template: ComponentStory<typeof _Tooltip> = (args) => (
  <div className="ml-[20vw] mt-[10vh]">
    <_Tooltip {...args} />
  </div>
)

export const Tooltip = Template.bind({})
Tooltip.args = {
  children: 'Hover me',
  message: 'Tooltip',
  position: 'left',
}
