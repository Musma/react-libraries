import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { ReactComponent as ArrowLeft } from './images/arrow_left.svg'
import { ReactComponent as ArrowRight } from './images/arrow_right.svg'
import { ReactComponent as ArrowDoubleLeft } from './images/arrow_double_left.svg'
import { ReactComponent as ArrowDoubleRight } from './images/arrow_double_right.svg'
import { ReactComponent as CalendarIcon } from './images/calendar.svg'
import { Caption, SubTitle } from 'src/components'

interface CalendarProps {
  handleDatePick: (isoDateString: string | undefined) => void
}

export const Calendar = ({handleDatePick}: CalendarProps) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
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

  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [startDay, setStartDay] = useState(getStartDayOfMonth(year, month))
  const [selectedDay, setSelectedDay] = useState<undefined | Date>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setStartDay(getStartDayOfMonth(year, month))
  }, [year, month])

  function getStartDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay()
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS

  const handleSelectDay = useCallback((date: Date) => {
    setSelectedDay(date)
    handleDatePick(date.toISOString())
  }, [])

  const handleSelectPrevMonthDay = useCallback((day: number) => {
    handlePrevMonthClick()
    handleSelectDay(new Date(month === 0 ? year - 1: year, getPrevMonth(), day))
  },[year, month])

  const handleSelectNextMonthDay = useCallback((day: number) => {
    handleNextMonthClick()
    handleSelectDay(new Date(month === 11 ? year + 1: year, getNextMonth(), day))
  }, [year, month])

  const getPrevMonth = useCallback(() => {
    return month === 0 ? 11: month - 1
  },[month])
  const getNextMonth = useCallback(() => {
    return month === 11 ? 0: month + 1
  }, [month])

  const handlePrevMonthClick = useCallback(() => {
    if(month !== 0){
      setMonth(getPrevMonth())
      return
    }
    setMonth(11)
    setYear(year - 1)
  },[month, year])
  
  const handleNextMonthClick = useCallback(() => {
    if(month !== 11){
      setMonth(getNextMonth())
      return
    }
    setMonth(0)
    setYear(year + 1)
  }, [month, year])

  const isToday = useCallback((d: number) => {
    const today = new Date()
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === d
  },[year, month])

  const isSelectedDay = useCallback((d: number) => {
    if(!selectedDay) return false
    const selectedYear = selectedDay.getFullYear()
    const selectedMonth = selectedDay.getMonth()
    const selectedDate = selectedDay.getDate()
    return selectedYear === year && selectedMonth === month && selectedDate === d
  },[selectedDay, year, month])

  const getNextMonthSlots = useCallback(() => {
    const sum = days[month] + startDay
    const slotLength = ((sum) > 35 ? 42 : 35) - sum
    return Array.from({ length: slotLength }).map((_, index) => {
      return (
        <Caption key={index} className={classNames(dayStyle, 'text-[#D0D5DD]')} onClick={() => handleSelectNextMonthDay(index + 1)}>
          {index + 1}
        </Caption>
      )
    })
  },[days, startDay, month, year])

  const frame = 'w-[200px] border border-[#BAC7D5] rounded'
  const header = 'h-[34px] flex justify-between items-center border-b border-b-[#EEEEEE]'
  const body = 'w-full p-2 grid grid-cols-7 gap-y-1 gap-x-2'
  const dayStyle = 'flex h-[25px] cursor-pointer items-center justify-center'

  return (
    <div className='flex flex-col items-start'>
    <SubTitle className='mb-[2px]' element={2}>Date</SubTitle>
    <div className='relative'>
    <input placeholder='YYYY-MM-DD' className='h-[32px] w-[200px] rounded border bg-white pl-2 text-[14px] font-normal leading-5 outline-none border-[#BAC7D5] focus:border-[#036DB7] mb-1'/>
    <CalendarIcon onClick={() => setIsOpen(!isOpen)} className='absolute right-2 top-2 cursor-pointer'/>
    </div>
    {
isOpen &&
    <div className={frame}>
      <div className={header}>
        <div className='flex items-center'>
        <ArrowDoubleLeft stroke='#D0D5DD' className='cursor-pointer' onClick={() => setYear(year - 1)}/>
        <ArrowLeft
          className="cursor-pointer"
          stroke='#D0D5DD'
          onClick={handlePrevMonthClick}
        />
        </div>
        <SubTitle element={3}>
          {MONTHS[month]} {year}
        </SubTitle>
        <div className='flex items-center'>
        <ArrowRight
          className="cursor-pointer"
          stroke='#D0D5DD'
          onClick={handleNextMonthClick}
        />
        <ArrowDoubleRight stroke='#D0D5DD' className='cursor-pointer' onClick={() => setYear(year + 1)}/>
        </div>
      </div>
      <div className={body}>
        {DAYS_OF_THE_WEEK.map((d) => (
          <SubTitle key={d} element={3} className={dayStyle}>{d}</SubTitle>
        ))}
        {Array(days[month] + startDay)
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 1)
            if (d <= 0){
              const prevMonthDay = days[getPrevMonth()] + (index - startDay + 1)
              return (
                <Caption key={index} className={classNames(dayStyle, 'text-[#D0D5DD]')} onClick={() => handleSelectPrevMonthDay(prevMonthDay)}>
                   {prevMonthDay}
                </Caption>
              )
            } 
            return (
              <Caption
                key={index}
                className={classNames(
                  dayStyle,
                  'rounded-[1px]',
                  {'bg-[#036DB7] text-white': isToday(d) && !isSelectedDay(d)},
                  {'bg-[#F2F8FB] text-[#036DB7]': isSelectedDay(d)}
                )}
                onClick={() => handleSelectDay(new Date(year, month, d))}
              >
                {d}
              </Caption>
            )
          })}
          {getNextMonthSlots()}
      </div>
    </div>
    }
    </div>
  )
}