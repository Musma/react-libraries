import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Paragraph as _Paragraph } from '../components/Paragraph'

export default {
  title: 'Components/Paragraph',
  component: _Paragraph,
  argTypes: {},
} as ComponentMeta<typeof _Paragraph>

const contents = `Technology towards People 우리는 당신의 가족이 당신의
  오늘을 걱정하지 않도록 사람을 위한,
  사람이 먼저인, 사람을 향한 기술을
  연구하고 개발합니다.
  Digitalization in construction 건설현장의 디지털화를 통해
  안전하고 효율적 관리가 가능한
  일하기 쉬운 건설현장을
  만들어 나갑니다.`

const Template: ComponentStory<typeof _Paragraph> = (args) => <_Paragraph {...args} />

export const Paragraph = Template.bind({})
Paragraph.args = {
  children: contents,
}
