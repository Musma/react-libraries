import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DateTime } from 'luxon'
import { useState } from 'react'

import { TimePicker as _TimePicker } from 'src/components'

const TimePickerDemo = () => {
  const [date, setDate] = useState(DateTime.fromObject({ hour: 8, minute: 0 }))
  return (
    <_TimePicker
      date={date}
      onDateChange={(date) => {
        setDate(date)
      }}
    />
  )
}

export default {
  title: 'Components/TimePicker',
  component: TimePickerDemo,
} as ComponentMeta<typeof TimePickerDemo>

const Template: ComponentStory<typeof TimePickerDemo> = (args) => <TimePickerDemo />
export const TimePicker = Template.bind({})
TimePicker.args = {}
