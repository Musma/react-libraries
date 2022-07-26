import classNames from 'classnames'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { ReactComponent as ArrowDoubleLeft } from './images/arrow_double_left.svg'
import { ReactComponent as ArrowDoubleRight } from './images/arrow_double_right.svg'
import { ReactComponent as ArrowLeft } from './images/arrow_left.svg'
import { ReactComponent as ArrowRight } from './images/arrow_right.svg'

import { SubTitle } from 'src/components'

interface CalendarProps {
  date: DateTime | undefined
  handleSelectDay: (y: number, m: number, d: number) => void
}
export const Calendar = ({ date, handleSelectDay }: CalendarProps) => {
  const frame = 'w-[200px] border border-[#BAC7D5] rounded'
  const header = 'h-[34px] flex justify-between items-center border-b border-b-[#EEEEEE]'
  const body = 'w-full p-2 grid grid-cols-7 gap-y-1 gap-x-2'
  const dayStyle =
    'flex h-[25px] cursor-pointer items-center justify-center text-[12px] font-normal leading-4'

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

  const createSlots = () => {
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
            {prevMonthDay}
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
              { 'bg-[#036DB7] text-white': isToday(day) && !isSelectedDay(day) },
              { 'bg-[#F2F8FB] text-[#036DB7]': isSelectedDay(day) },
            )}
            onClick={() => handleDayClick(year, month, day)}
          >
            {day}
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
            {nextMonthDay}
          </div>
        )
      }
    })
  }
  useEffect(() => {
    setStartDay(getStartDayOfMonth(year, month))
  }, [year, month])

  useEffect(() => {
    if (!date) return
    setYear(date.year)
    setMonth(date.month)
  }, [date])

  return (
    <div className={frame}>
      <div className={header}>
        <div className="flex items-center">
          <ArrowDoubleLeft
            stroke="#D0D5DD"
            className="cursor-pointer"
            onClick={() => setYear(year - 1)}
          />
          <ArrowLeft className="cursor-pointer" stroke="#D0D5DD" onClick={handlePrevMonthClick} />
        </div>
        <SubTitle element={3}>
          {MONTHS[month - 1]} {year}
        </SubTitle>
        <div className="flex items-center">
          <ArrowRight className="cursor-pointer" stroke="#D0D5DD" onClick={handleNextMonthClick} />
          <ArrowDoubleRight
            stroke="#D0D5DD"
            className="cursor-pointer"
            onClick={() => setYear(year + 1)}
          />
        </div>
      </div>
      <div className={body}>
        {DAYS_OF_THE_WEEK.map((d) => (
          <SubTitle key={d} element={3} className={dayStyle}>
            {d}
          </SubTitle>
        ))}
        {createSlots()}
      </div>
    </div>
  )
}
