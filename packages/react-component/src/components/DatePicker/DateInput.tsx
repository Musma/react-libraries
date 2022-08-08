import classNames from 'classnames'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Size } from 'src/types'

import { ReactComponent as LgCalendarIcon } from './images/calendar_lg.svg'
import { ReactComponent as MdCalendarIcon } from './images/calendar_md.svg'

interface DateInputProps {
  size: Size
  date: DateTime | undefined
  toggleIsOpen: () => void
  clearDate: () => void
  handleSelectDay: (y: number, m: number, d: number) => void
}
export const DateInput = ({
  size,
  toggleIsOpen,
  date,
  clearDate,
  handleSelectDay,
}: DateInputProps) => {
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

  const sizeStyle = useMemo(() => {
    return {
      lg: 'h-[32px] w-[200px]',
      md: 'h-[28px] w-[180px]',
      sm: 'h-[24px] w-[148px]',
    }[size]
  }, [size])

  const fontStyle = useMemo(() => {
    return {
      lg: 'text-[14px] leading-5 text-[14px]',
      md: 'text-[14px] leading-5 text-[14px]',
      sm: 'text-[12px] leading-4 text-[12px]',
    }[size]
  }, [size])

  return (
    <div className="relative flex items-center">
      <div
        className={classNames(
          'mb-1 flex items-center rounded border border-[#BAC7D5] bg-white pl-2 font-normal outline-none focus:border-[#036DB7]',
          { 'border-red-400': isError },
          sizeStyle,
          fontStyle,
        )}
      >
        <input
          placeholder="YYYY"
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          maxLength={4}
          className={classNames('appearance-none focus:outline-none', {
            'w-[35px]': size !== 'sm',
            'w-[30px]': size === 'sm',
          })}
        />
        -
        <input
          placeholder="MM"
          value={month}
          onChange={(e) => handleMonthChange(e.target.value)}
          maxLength={2}
          className={classNames(
            'appearance-none text-center placeholder:tracking-tighter focus:outline-none',
            { 'w-[23px]': size !== 'sm' },
            { 'w-[20px]': size === 'sm' },
          )}
        />
        -
        <input
          placeholder="DD"
          value={day}
          onChange={(e) => handleDayChange(e.target.value)}
          maxLength={2}
          className={classNames(
            'appearance-none text-center placeholder:tracking-tighter focus:outline-none',
            { 'w-[23px] ': size !== 'sm' },
            { 'w-[20px] ': size === 'sm' },
          )}
        />
      </div>
      <span
        onClick={toggleIsOpen}
        className={classNames(
          'absolute right-2 cursor-pointer',
          { 'top-2': size === 'lg' },
          { 'top-[7px]': size === 'md' },
          { 'top-[5px]': size === 'sm' },
        )}
      >
        {size === 'lg' ? <LgCalendarIcon /> : <MdCalendarIcon />}
      </span>
    </div>
  )
}
