import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ModalExample } from '../components/Modal'

export default {
  title: 'Components/Modal',
  component: ModalExample,
} as ComponentMeta<typeof ModalExample>

export const Modal: ComponentStory<typeof ModalExample> = (args) => <ModalExample {...args} />
