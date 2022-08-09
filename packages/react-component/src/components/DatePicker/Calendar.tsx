import classNames from 'classnames'
import { DateTime } from 'luxon'
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'
import { Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as ArrowDoubleLeft } from './images/arrow_double_left.svg'
import { ReactComponent as ArrowDoubleRight } from './images/arrow_double_right.svg'
import { ReactComponent as ArrowLeft } from './images/arrow_left.svg'
import { ReactComponent as ArrowRight } from './images/arrow_right.svg'
import { ReactComponent as SmArrowDoubleLeft } from './images/arrow_double_left_sm.svg'
import { ReactComponent as SmArrowDobuleRight } from './images/arrow_double_right_sm.svg'
import { ReactComponent as SmArrowLeft } from './images/arrow_left_sm.svg'
import { ReactComponent as SmArrowRight } from './images/arrow_right_sm.svg'

interface CalendarProps {
  size: Size
  date: DateTime | undefined
  handleSelectDay: (y: number, m: number, d: number) => void
}
export const Calendar = ({ size, date, handleSelectDay }: CalendarProps) => {
  const DAYS_OF_THE_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const [year, setYear] = useState(DateTime.local().year)
  const [month, setMonth] = useState(DateTime.local().month)
  const [startDay, setStartDay] = useState(getStartDayOfMonth(year, month))

  function getStartDayOfMonth(year: number, month: number) {
    return DateTime.fromObject({ year, month, day: 1 }).weekday
  }

  const handleDayClick = useCallback(
    (y: number, m: number, d: number) => {
      handleSelectDay(y, m, d)
    },
    [handleSelectDay],
  )

  const getPrevMonth = useCallback(() => {
    return DateTime.local(year, month === 1 ? 12 : month - 1).month
  }, [month, year])

  const getNextMonth = useCallback(() => {
    return DateTime.local(year, month === 12 ? 1 : month + 1).month
  }, [month, year])

  const handlePrevMonthClick = useCallback(() => {
    setMonth(getPrevMonth())
    setYear(getPrevMonth() === 12 ? year - 1 : year)
  }, [getPrevMonth, year])

  const handleNextMonthClick = useCallback(() => {
    setMonth(getNextMonth())
    setYear(getNextMonth() === 1 ? year + 1 : year)
  }, [getNextMonth, year])

  const handleSelectNextMonthDay = useCallback(
    (day: number) => {
      handleNextMonthClick()
      handleDayClick(month === 12 ? year + 1 : year, getNextMonth(), day)
    },
    [handleNextMonthClick, handleDayClick, month, year, getNextMonth],
  )
  const handleSelectPrevMonthDay = useCallback(
    (day: number) => {
      handlePrevMonthClick()
      handleDayClick(month === 1 ? year - 1 : year, getPrevMonth(), day)
    },
    [handlePrevMonthClick, handleDayClick, month, year, getPrevMonth],
  )

  const isToday = useCallback(
    (d: number) => {
      const today = DateTime.local()
      return today.year === year && today.month === month && today.day === d
    },
    [year, month],
  )

  const isSelectedDay = useCallback(
    (d: number) => {
      if (!date) return
      return year === date.year && month === date.month && d === date.day
    },
    [date, month, year],
  )

  const dayStyle = useMemo(() => {
    return `flex ${
      size === 'sm' ? 'h-[18px]' : 'h-[25px]'
    } cursor-pointer items-center justify-center`
  }, [size])
  // const dayStyle = 'flex h-[25px] cursor-pointer items-center justify-center'

  const createSlots = useCallback(() => {
    const daysInMonth = DateTime.local(year, month).daysInMonth
    const length = daysInMonth + startDay > 35 ? 42 : 35
    return Array.from({ length }).map((_, index) => {
      function isPrevMonth() {
        return index < startDay
      }
      function isCurrentMonth() {
        return index >= startDay && index < startDay + daysInMonth
      }
      function isNextMonth() {
        return index >= startDay + daysInMonth
      }
      if (isPrevMonth()) {
        const prevMonthDay =
          DateTime.local(year, getPrevMonth()).daysInMonth - (startDay - 1) + index
        return (
          <div
            key={index}
            className={classNames(dayStyle, 'text-[#D0D5DD]')}
            onClick={() => handleSelectPrevMonthDay(prevMonthDay)}
          >
            <Typography type="caption" variant={size === 'sm' ? 'caption2' : 'caption1'}>
              {prevMonthDay}
            </Typography>
          </div>
        )
      }
      if (isCurrentMonth()) {
        const day = index + 1 - startDay
        return (
          <div
            key={index}
            className={classNames(
              dayStyle,
              'rounded-[1px]',
              { 'text-white-main bg-[#036DB7]': isToday(day) && !isSelectedDay(day) },
              { 'bg-[#F2F8FB] text-[#036DB7]': isSelectedDay(day) },
            )}
            onClick={() => handleDayClick(year, month, day)}
          >
            <Typography type="caption" variant={size === 'sm' ? 'caption2' : 'caption1'}>
              {day}
            </Typography>
          </div>
        )
      }
      if (isNextMonth()) {
        const nextMonthDay = index - (daysInMonth + startDay - 1)
        return (
          <div
            key={index}
            className={classNames(dayStyle, 'text-[#D0D5DD]')}
            onClick={() => handleSelectNextMonthDay(nextMonthDay)}
          >
            <Typography type="caption" variant={size === 'sm' ? 'caption2' : 'caption1'}>
              {nextMonthDay}
            </Typography>
          </div>
        )
      }
    })
  }, [
    dayStyle,
    getPrevMonth,
    handleDayClick,
    handleSelectNextMonthDay,
    handleSelectPrevMonthDay,
    isSelectedDay,
    isToday,
    month,
    size,
    startDay,
    year,
  ])
  useEffect(() => {
    setStartDay(getStartDayOfMonth(year, month))
  }, [year, month])

  useEffect(() => {
    if (!date) return
    setYear(date.year)
    setMonth(date.month)
  }, [date])

  return (
    <div
      className={classNames('rounded border border-[#BAC7D5]', {
        'w-[200px]': size === 'lg',
        'w-[180px]': size === 'md',
        'w-[148px]': size === 'sm',
      })}
    >
      <div
        className={classNames('flex items-center justify-between border-b border-b-[#EEEEEE]', {
          'h-[34px]': size !== 'sm',
          'h-[24px]': size === 'sm',
        })}
      >
        <div className="flex items-center">
          <span className="cursor-pointer" onClick={() => setYear(year - 1)}>
            {size === 'sm' ? <SmArrowDoubleLeft /> : <ArrowDoubleLeft />}
          </span>
          <span className="cursor-pointer" onClick={handlePrevMonthClick}>
            {size === 'sm' ? <SmArrowLeft /> : <ArrowLeft />}
          </span>
        </div>
        <MonthAndYear size={size}>
          {MONTHS[month - 1]} {year}
        </MonthAndYear>
        <div className="flex items-center">
          <span className="cursor-pointer" onClick={handleNextMonthClick}>
            {size === 'sm' ? <SmArrowRight /> : <ArrowRight />}
          </span>
          <span className="cursor-pointer" onClick={() => setYear(year + 1)}>
            {size === 'sm' ? <SmArrowDobuleRight /> : <ArrowDoubleRight />}
          </span>
        </div>
      </div>
      <div
        className={classNames(
          'grid w-full grid-cols-7 gap-y-1 p-2',
          { 'gap-x-2': size !== 'sm' },
          { 'gap-x-1': size === 'sm' },
        )}
      >
        {DAYS_OF_THE_WEEK.map((d) => (
          <div key={d} className="flex h-[18px] items-center justify-center">
            <DayOfTheWeek key={d} size={size}>
              {d}
            </DayOfTheWeek>
          </div>
        ))}
        {createSlots()}
      </div>
    </div>
  )
}

interface TypoProps {
  size: Size
}
const MonthAndYear = ({ size, children }: PropsWithChildren<TypoProps>) => {
  return size === 'sm' ? (
    <Typography type="caption" variant="caption2">
      {children}
    </Typography>
  ) : (
    <Typography type="subTitle" variant="subTitle3">
      {children}
    </Typography>
  )
}

const DayOfTheWeek = ({ size, children }: PropsWithChildren<TypoProps>) => {
  return size === 'sm' ? (
    <Typography type="caption" variant="caption2">
      {children}
    </Typography>
  ) : (
    <Typography type="subTitle" variant="subTitle3">
      {children}
    </Typography>
  )
}
