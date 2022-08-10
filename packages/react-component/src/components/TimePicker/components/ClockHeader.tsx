import classNames from 'classnames'
import { DateTime } from 'luxon'
import { getMeridiem, ClockType, Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as ColonIcon } from '../images/colon.svg'

interface Props {
  size: Size
  clockType: ClockType
  date: DateTime
  onDateChange: (dateTime: DateTime) => void
  onClockTypeChange: (clock: ClockType) => void
}

export const ClockHeader = ({ size, date, clockType, onDateChange, onClockTypeChange }: Props) => {
  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <div
          className={classNames(
            'flex cursor-pointer items-center justify-center rounded-md',
            { 'h-10 w-10': size === 'sm' },
            { 'h-[50px] w-[50px]': size === 'md' },
            { 'h-[60px] w-[60px]': size === 'lg' },
            clockType === 'hour' ? 'bg-[#F2F8FB]' : 'bg-[#F9FBFB]',
          )}
          onClick={() => {
            if (clockType !== 'hour') {
              onClockTypeChange('hour')
            }
          }}
        >
          <HourMinLabel
            size={size}
            color={clockType === 'hour' ? '#036DB7' : ''}
            label={date.toFormat('hh')}
          />
        </div>
        <ColonIcon />
        <div
          className={classNames(
            'flex cursor-pointer items-center justify-center rounded-md',
            { 'h-10 w-10': size === 'sm' },
            { 'h-[50px] w-[50px]': size === 'md' },
            { 'h-[60px] w-[60px]': size === 'lg' },
            clockType === 'min' ? 'bg-[#F2F8FB]' : 'bg-[#F9FBFB]',
          )}
          onClick={() => {
            if (clockType !== 'min') {
              onClockTypeChange('min')
            }
          }}
        >
          <HourMinLabel
            size={size}
            color={clockType === 'min' ? '#036DB7' : ''}
            label={date.toFormat('mm')}
          />
        </div>
      </div>

      <div role="group" className="flex flex-col rounded-md">
        <button
          className={classNames(
            'flex items-center justify-center rounded-tl-[4px] rounded-tr-[4px] border border-[#BAC7D5] outline-none',
            { 'h-5 w-6': size === 'sm' },
            { 'h-[25px] w-[30px]': size === 'md' },
            { 'h-[30px] w-[32px]': size === 'lg' },
            getMeridiem(date) == 'am'
              ? 'bg-[#F2F8FB] text-[#036DB7]'
              : 'bg-white-main text-[#D0D5DD]',
          )}
          onClick={() => {
            if (getMeridiem(date) !== 'am') {
              onDateChange(date.minus({ hour: 12 }))
            }
          }}
        >
          <AmPmLabel
            size={size}
            color={getMeridiem(date) === 'am' ? '#036DB7' : '#D0D5DD'}
            label="AM"
          />
        </button>
        <button
          className={classNames(
            'flex items-center justify-center rounded-bl-[4px] rounded-br-[4px] border border-t-0 border-[#BAC7D5] outline-none',
            { 'h-5 w-6': size === 'sm' },
            { 'h-[25px] w-[30px]': size === 'md' },
            { 'h-[30px] w-[32px]': size === 'lg' },
            getMeridiem(date) == 'pm'
              ? 'bg-[#F2F8FB] text-[#036DB7]'
              : 'bg-white-main text-[#D0D5DD]',
          )}
          onClick={() => {
            if (getMeridiem(date) !== 'pm') {
              onDateChange(date.plus({ hour: 12 }))
            }
          }}
        >
          <AmPmLabel
            size={size}
            color={getMeridiem(date) === 'pm' ? '#036DB7' : '#D0D5DD'}
            label="PM"
          />
        </button>
      </div>
    </div>
  )
}

interface Label {
  size: Size
  color: string
  label: string
}

const AmPmLabel = ({ size, color, label }: Label) => {
  if (size === 'sm')
    return (
      <Typography type="caption" variant="caption2" color={color}>
        {label}
      </Typography>
    )
  return (
    <Typography type="subTitle" variant="subTitle3" color={color}>
      {label}
    </Typography>
  )
}

const HourMinLabel = ({ size, color, label }: Label) => {
  return (
    <Typography type="heading" variant={size === 'lg' ? 'h2' : 'h3'} color={color}>
      {label}
    </Typography>
  )
}
