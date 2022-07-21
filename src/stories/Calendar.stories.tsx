import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Calendar as _Calendar, CalendarExample as _CalendarExample } from 'src/components/'

export default {
  title: 'Components/Calendar',
  component: _Calendar,
} as ComponentMeta<typeof _Calendar>

export const CalendarExample = () => <_CalendarExample />