import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubTitle as _SubTitle } from '../components/SubTitle'

export default {
  title: 'Components/SubTitle',
  component: _SubTitle,
  argTypes: {},
} as ComponentMeta<typeof _SubTitle>

const contents = 'Technology towards People'

const Template: ComponentStory<typeof _SubTitle> = (args) => <_SubTitle {...args} />

export const SubTitle = Template.bind({})
SubTitle.args = {
  children: contents,
}
