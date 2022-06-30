import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Tooltip as _Tooltip } from 'src/components/Tooltip'

export default {
  title: 'Components/Tooltip',
  component: _Tooltip,
  argTypes: {},
} as ComponentMeta<typeof _Tooltip>

export const Tooltip: ComponentStory<typeof _Tooltip> = () => (
  <div className="ml-[10vw] mt-[20vh]">
    <_Tooltip message="Tooltip" position="left">
      Hover me
    </_Tooltip>
  </div>
)
