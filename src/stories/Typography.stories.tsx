import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Heading1 as _Heading1,
  Heading2 as _Heading2,
  Heading3 as _Heading3,
  Heading4 as _Heading4,
  Heading5 as _Heading5,
  Heading6 as _Heading6,
  Body1 as _Body1,
  Body2 as _Body2,
  Body3 as _Body3,
  Caption1 as _Caption1,
  Caption2 as _Caption2,
  SubTitle1 as _SubTitle1,
  SubTitle2 as _SubTitle2,
  SubTitle3 as _SubTitle3,
} from '../components/Typography'

export default {
  title: 'Components/Typography',
  component: _Heading1,
  argTypes: {},
} as ComponentMeta<typeof _Heading1>

const heading =
  'Technology towards People 사람을 위한, 사람이 먼저인, 사람을 향한 기술을 연구하고 개발합니다.'
const subTitle =
  'Technology towards People 사람을 위한, 사람이 먼저인, 사람을 향한 기술을 연구하고 개발합니다.'
// const body =
//   'Technology towards People 사람을 위한, 사람이 먼저인, 사람을 향한 기술을 연구하고 개발합니다. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ea corporis dolor vitae, deleniti eveniet repudiandae quas laborum, similique tempora, nam ex expedita placeat? Cumque assumenda alias ipsam exercitationem. Cum.'
const body = 'Technology towards People'
const caption = 'Caption'

export const Heading1: ComponentStory<typeof _Heading1> = () => <_Heading1>{heading}</_Heading1>

export const Heading2: ComponentStory<typeof _Heading2> = () => <_Heading2>{heading}</_Heading2>

export const Heading3: ComponentStory<typeof _Heading3> = () => <_Heading3>{heading}</_Heading3>

export const Heading4: ComponentStory<typeof _Heading4> = () => <_Heading4>{heading}</_Heading4>

export const Heading5: ComponentStory<typeof _Heading5> = () => <_Heading5>{heading}</_Heading5>

export const Heading6: ComponentStory<typeof _Heading6> = () => <_Heading6>{heading}</_Heading6>

export const Body1: ComponentStory<typeof _Body1> = () => <_Body1>{body}</_Body1>

export const Body2: ComponentStory<typeof _Body2> = () => <_Body2>{body}</_Body2>

export const Body3: ComponentStory<typeof _Body3> = () => <_Body3>{body}</_Body3>

export const SubTitle1: ComponentStory<typeof _SubTitle1> = () => (
  <_SubTitle1>{subTitle}</_SubTitle1>
)

export const SubTitle2: ComponentStory<typeof _SubTitle2> = () => (
  <_SubTitle2>{subTitle}</_SubTitle2>
)

export const SubTitle3: ComponentStory<typeof _SubTitle3> = () => (
  <_SubTitle3>{subTitle}</_SubTitle3>
)

export const Caption1: ComponentStory<typeof _Caption1> = () => <_Caption1>{caption}</_Caption1>

export const Caption2: ComponentStory<typeof _Caption2> = () => <_Caption2>{caption}</_Caption2>
