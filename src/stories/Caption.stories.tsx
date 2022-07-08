import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Caption as _Caption } from '../components/Caption'

export default {
  title: 'Components/Caption',
  component: _Caption,
} as ComponentMeta<typeof _Caption>

const contents = 'Musma'

export const Caption: ComponentStory<typeof _Caption> = (args) => <_Caption {...args} />
Caption.args = {
  children: contents,
}
