import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag as _Tag } from '../components/Tag'

export default {
  title: 'Components/Tag',
  component: _Tag,
} as ComponentMeta<typeof _Tag>

const Template: ComponentStory<typeof _Tag> = (args) => <_Tag {...args} />
export const Tag = Template.bind({})
Tag.args = { label: 'Sample Text', variant: 'rectangle', color: 'light' }
