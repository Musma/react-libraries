import classNames from 'classnames'
import { DateTime } from 'luxon'
import { useCallback, useMemo } from 'react'
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
  const getAmPmTypography = useCallback(
    (amPm: string) => {
      if (size === 'sm')
        return (
          <Typography type="caption" variant="caption2">
            {amPm}
          </Typography>
        )
      return (
        <Typography type="subTitle" variant="subTitle3">
          {amPm}
        </Typography>
      )
    },
    [size],
  )
  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <div
          className={classNames(
            'flex cursor-pointer items-center justify-center rounded-md',
            { 'h-10 w-10': size === 'sm' },
            { 'h-[50px] w-[50px]': size === 'md' },
            { 'h-[60px] w-[60px]': size === 'lg' },
            clockType === 'hour' ? 'bg-[#F2F8FB] text-[#036DB7]' : 'bg-[#F9FBFB] text-[#242E40]',
          )}
          onClick={() => {
            if (clockType !== 'hour') {
              onClockTypeChange('hour')
            }
          }}
        >
          <Typography type="heading" variant={size === 'lg' ? 'h2' : 'h3'}>
            {date.toFormat('hh')}
          </Typography>
        </div>
        <ColonIcon />
        <div
          className={classNames(
            'flex cursor-pointer items-center justify-center rounded-md',
            { 'h-10 w-10': size === 'sm' },
            { 'h-[50px] w-[50px]': size === 'md' },
            { 'h-[60px] w-[60px]': size === 'lg' },
            clockType === 'min' ? 'bg-[#F2F8FB] text-[#036DB7]' : 'bg-[#F9FBFB] text-[#242E40]',
          )}
          onClick={() => {
            if (clockType !== 'min') {
              onClockTypeChange('min')
            }
          }}
        >
          <Typography type="heading" variant={size === 'lg' ? 'h2' : 'h3'}>
            {date.toFormat('mm')}
          </Typography>
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
          {getAmPmTypography('AM')}
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
          {getAmPmTypography('PM')}
        </button>
      </div>
    </div>
  )
}
