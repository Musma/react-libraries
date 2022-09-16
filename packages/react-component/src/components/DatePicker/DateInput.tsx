import { useCallback, useEffect, useState } from 'react'

import { css, cx } from '@emotion/css'
import { DateTime } from 'luxon'

import { ReactComponent as LgCalendarIcon } from 'src/components/DatePicker/images/calendar_lg.svg'
import { ReactComponent as SmCalendarIcon } from 'src/components/DatePicker/images/calendar_sm.svg'
import { Size, theme } from 'src/styles/theme'

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

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      })}
      onClick={() => toggleIsOpen()}
    >
      <div
        className={cx(inputContainerCss.base, inputContainerCss.size[size], {
          [css({ border: `1px solid ${theme.color.red.main}` })]: isError,
        })}
      >
        <div className={css({ display: 'flex' })}>
          <input
            placeholder="YYYY"
            onClick={(e) => e.stopPropagation()}
            value={year}
            onChange={(e) => handleYearChange(e.target.value)}
            maxLength={4}
            className={css({
              color: theme.color.black.dark,
              appearance: 'none',
              textAlign: 'center',
              border: 0,
              '&:focus': {
                outline: '2px solid transparent',
                outlineOffset: '2px',
              },
              '&::placeholder': {
                letterSpacing: '-0.08em',
              },
              width: size === 'sm' ? '32px' : '38px',
            })}
          />
          -
          <input
            placeholder="MM"
            onClick={(e) => e.stopPropagation()}
            value={month}
            onChange={(e) => handleMonthChange(e.target.value)}
            maxLength={2}
            className={css({
              color: theme.color.black.dark,
              appearance: 'none',
              textAlign: 'center',
              border: 0,
              '&:focus': {
                outline: '2px solid transparent',
                outlineOffset: '2px',
              },
              '&::placeholder': {
                letterSpacing: '-0.08em',
              },
              width: size === 'sm' ? '24px' : '28px',
            })}
          />
          -
          <input
            placeholder="DD"
            onClick={(e) => e.stopPropagation()}
            value={day}
            onChange={(e) => handleDayChange(e.target.value)}
            maxLength={2}
            className={cx(
              css({
                color: theme.color.black.dark,
                appearance: 'none',
                textAlign: 'center',
                border: 0,
                '&::placeholder': { letterSpacing: '-0.08em' },
                '&:focus': {
                  outline: '2px solid transparent',
                  outlineOffset: '2px',
                },
                width: size === 'sm' ? '20px' : '28px',
              }),
            )}
          />
        </div>
        <div className={cx(iconContainerCss.base, iconContainerCss.position[size])}>
          <span onClick={toggleIsOpen}>
            {size === 'sm' ? <SmCalendarIcon /> : <LgCalendarIcon />}
          </span>
        </div>
      </div>
    </div>
  )
}

const inputContainerCss = {
  base: css({
    backgroundColor: theme.color.white.main,
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '4px',
    border: `1px solid ${theme.color.gray.darker}`,
    paddingLeft: '8px',
    outline: 'none',
    '&:focus': {
      border: `1px solid ${theme.color.blue.main}`,
    },
  }),
  size: {
    sm: css({ fontSize: '12px', lineHeight: '16px', height: '24px', width: '148px' }),
    md: css({ fontSize: '14px', lineHeight: '20px', height: '28px', width: '180px' }),
    lg: css({ fontSize: '14px', lineHeight: '20px', height: '32px', width: '200px' }),
  },
}
const iconContainerCss = {
  base: css({ marginRight: '8px' }),
  position: {
    lg: css({ top: '8px' }),
    md: css({ top: '7px' }),
    sm: css({ top: '5px' }),
  },
}
