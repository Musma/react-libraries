import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ExcelDownload as _ExcelDownload } from '../components/ExcelDownload'

export default {
  title: 'Components/ExcelDownload',
  component: _ExcelDownload,
  argTypes: {},
} as ComponentMeta<typeof _ExcelDownload>

export const ExcelDownload: ComponentStory<typeof _ExcelDownload> = (args) => (
  <_ExcelDownload {...args} />
)
