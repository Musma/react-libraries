import classNames from 'classnames'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useState } from 'react'

import { ReactComponent as CalendarIcon } from './images/calendar.svg'

interface DateInputProps {
  date: DateTime | undefined
  toggleIsOpen: () => void
  clearDate: () => void
  handleSelectDay: (y: number, m: number, d: number) => void
}
export const DateInput = ({ toggleIsOpen, date, clearDate, handleSelectDay }: DateInputProps) => {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [isError, setIsError] = useState(false)

  const handleYearChange = useCallback(
    (value: string) => {
      const regex = /^\d{0,4}$/
      if (!regex.test(value)) return
      clearDate()
      if (value === '0000') {
        setYear('0001')
        return
      }
      setYear(value)
    },
    [clearDate],
  )

  const handleMonthChange = useCallback(
    (value: string) => {
      // 숫자만 입력
      const regex1 = /^\d{0,2}$/
      if (!regex1.test(value)) return
      // 앞자리가 2~9 일 때 0을 앞에 붙여줌
      clearDate()
      const regex3 = /^[2-9]$/
      if (regex3.test(value)) {
        setMonth(`0${value}`)
        return
      }
      setMonth(value)
    },
    [clearDate],
  )

  const handleDayChange = useCallback(
    (value: string) => {
      clearDate()
      const regex = /^\d{0,2}$/
      if (!regex.test(value)) return
      setDay(value)
    },
    [clearDate],
  )

  const isDateValid = useCallback(() => {
    return DateTime.fromObject({ year: Number(year), month: Number(month), day: Number(day) })
      .isValid
  }, [day, month, year])

  useEffect(() => {
    if (!date) return
    setYear(`${date.year}`)
    setMonth(`${date.month}`.padStart(2, '0'))
    setDay(`${date.day}`.padStart(2, '0'))
  }, [date])

  useEffect(() => {
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) return
    if (!isDateValid()) {
      setIsError(true)
      return
    }
    handleSelectDay(Number(year), Number(month), Number(day))
    setIsError(false)
  }, [day, handleSelectDay, isDateValid, month, year])

  return (
    <div className="relative">
      <div
        className={classNames(
          'h-[32px] w-[200px] rounded border bg-white pl-2 text-[14px] font-normal leading-5 outline-none border-[#BAC7D5] focus:border-[#036DB7] mb-1 flex items-center',
          { 'border-red-400': isError },
        )}
      >
        <input
          placeholder="YYYY"
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          maxLength={4}
          className="appearance-none w-[34px] placeholder:text-[12px] focus:outline-none"
        />
        -
        <input
          placeholder="MM"
          value={month}
          onChange={(e) => handleMonthChange(e.target.value)}
          maxLength={2}
          className="appearance-none w-[22px] placeholder:text-[12px] placeholder:tracking-tighter focus:outline-none"
        />
        -
        <input
          placeholder="DD"
          value={day}
          onChange={(e) => handleDayChange(e.target.value)}
          maxLength={2}
          className="appearance-none w-[22px] placeholder:text-[12px] placeholder:tracking-tighter focus:outline-none"
        />
      </div>
      <CalendarIcon onClick={toggleIsOpen} className="absolute right-2 top-2 cursor-pointer" />
    </div>
  )
}
