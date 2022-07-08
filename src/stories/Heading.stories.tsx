import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading as _Heading } from '../components/Heading'

export default {
  title: 'Components/Heading',
  component: _Heading,
  argTypes: {},
} as ComponentMeta<typeof _Heading>

const contents = 'Technology towards People'

const Template: ComponentStory<typeof _Heading> = (args) => <_Heading {...args} />

export const Heading = Template.bind({})
Heading.args = {
  children: contents,
}
