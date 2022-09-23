import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { DateTime } from 'luxon'

import { Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as ArrowDoubleLeft } from './images/arrow_double_left.svg'
import { ReactComponent as SmArrowDoubleLeft } from './images/arrow_double_left_sm.svg'
import { ReactComponent as ArrowDoubleRight } from './images/arrow_double_right.svg'
import { ReactComponent as SmArrowDobuleRight } from './images/arrow_double_right_sm.svg'
import { ReactComponent as ArrowLeft } from './images/arrow_left.svg'
import { ReactComponent as SmArrowLeft } from './images/arrow_left_sm.svg'
import { ReactComponent as ArrowRight } from './images/arrow_right.svg'
import { ReactComponent as SmArrowRight } from './images/arrow_right_sm.svg'

interface CalendarProps {
  size: Size
  date: DateTime | undefined
  handleSelectDay: (y: number, m: number, d: number) => void
}

export const Calendar = ({ size, date, handleSelectDay }: CalendarProps) => {
  const theme = useTheme()
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

  const dayCss = useMemo(() => {
    return {
      base: css({
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '1px',
      }),
      size: {
        sm: css({ height: '18px' }),
        md: css({ height: '25px' }),
        lg: css({ height: '25px' }),
      },
    }
  }, [])

  const createSlots = useCallback(() => {
    const daysInMonth = DateTime.local(year, month).daysInMonth
    const length = daysInMonth + startDay > 35 ? 42 : 35
    return Array.from({ length }).map((_, index) => {
      if (isPrevMonth(index)) {
        const prevMonthDay =
          DateTime.local(year, getPrevMonth()).daysInMonth - (startDay - 1) + index
        return (
          <div
            key={index}
            className={cx(dayCss.base, dayCss.size[size])}
            onClick={() => handleSelectPrevMonthDay(prevMonthDay)}
          >
            <Typography
              type={size === 'sm' ? 'caption2' : 'caption1'}
              className={css({ color: theme.color.gray.main })}
            >
              {prevMonthDay}
            </Typography>
          </div>
        )
      }
      if (isCurrentMonth(index)) {
        const day = index + 1 - startDay
        return (
          <div
            key={index}
            className={cx(
              dayCss.base,
              dayCss.size[size],
              {
                [css({ backgroundColor: theme.color.blue.main })]:
                  isToday(day) && !isSelectedDay(day),
              },
              { [css({ backgroundColor: theme.color.blue.lighter })]: isSelectedDay(day) },
            )}
            onClick={() => handleDayClick(year, month, day)}
          >
            <Typography
              type={size === 'sm' ? 'caption2' : 'caption1'}
              className={css({ color: getColor(day) })}
            >
              {day}
            </Typography>
          </div>
        )
      }
      if (isNextMonth(index)) {
        const nextMonthDay = index - (daysInMonth + startDay - 1)
        return (
          <div
            key={index}
            className={cx(dayCss.base, dayCss.size[size])}
            onClick={() => handleSelectNextMonthDay(nextMonthDay)}
          >
            <Typography
              type={size === 'sm' ? 'caption2' : 'caption1'}
              className={css({ color: theme.color.gray.main })}
            >
              {nextMonthDay}
            </Typography>
          </div>
        )
      }
    })
    function getColor(day: number) {
      if (isToday(day) && !isSelectedDay(day)) return theme.color.white.main
      if (isSelectedDay(day)) return theme.color.blue.main
      return ''
    }
    function isPrevMonth(index: number) {
      return index < startDay
    }
    function isCurrentMonth(index: number) {
      return index >= startDay && index < startDay + daysInMonth
    }
    function isNextMonth(index: number) {
      return index >= startDay + daysInMonth
    }
  }, [
    dayCss,
    getPrevMonth,
    handleDayClick,
    handleSelectNextMonthDay,
    handleSelectPrevMonthDay,
    isSelectedDay,
    isToday,
    month,
    size,
    startDay,
    theme,
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
      className={cx(
        containerCss.base,
        containerCss.size[size],
        css({
          border: `1px solid ${theme.color.gray.darker}`,
          backgroundColor: theme.color.white.main,
        }),
      )}
    >
      <div
        className={cx(
          sencondContainerCss.base,
          sencondContainerCss.size[size],
          css({ borderBottom: `1px solid ${theme.color.white.dark}` }),
        )}
      >
        <div className={css({ display: 'flex', alignItems: 'center' })}>
          <span className={css({ cursor: 'pointer' })} onClick={() => setYear(year - 1)}>
            {size === 'sm' ? <SmArrowDoubleLeft /> : <ArrowDoubleLeft />}
          </span>
          <span className={css({ cursor: 'pointer' })} onClick={handlePrevMonthClick}>
            {size === 'sm' ? <SmArrowLeft /> : <ArrowLeft />}
          </span>
        </div>
        <MonthAndYear size={size}>
          {MONTHS[month - 1]} {year}
        </MonthAndYear>
        <div className={css({ display: 'flex', alignItems: 'center' })}>
          <span className={css({ cursor: 'pointer' })} onClick={handleNextMonthClick}>
            {size === 'sm' ? <SmArrowRight /> : <ArrowRight />}
          </span>
          <span className={css({ cursor: 'pointer' })} onClick={() => setYear(year + 1)}>
            {size === 'sm' ? <SmArrowDobuleRight /> : <ArrowDoubleRight />}
          </span>
        </div>
      </div>
      <div className={cx(slotContainerCss.base, slotContainerCss.columnGap[size])}>
        {DAYS_OF_THE_WEEK.map((d) => (
          <div
            key={d}
            className={css({
              display: 'flex',
              height: '18px',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
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

const containerCss = {
  base: css({ borderRadius: '4px', zIndex: 9999, position: 'absolute', top: '100%' }),
  size: {
    lg: css({ width: '200px' }),
    md: css({ width: '180px' }),
    sm: css({ width: '148px' }),
  },
}
const sencondContainerCss = {
  base: css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }),
  size: {
    sm: css({ height: '24px' }),
    md: css({ height: '34px' }),
    lg: css({ height: '34px' }),
  },
}
const slotContainerCss = {
  base: css({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
    rowGap: '4px',
    padding: '8px',
  }),
  columnGap: {
    sm: css({ columnGap: '4px' }),
    md: css({ columnGap: '8px' }),
    lg: css({ columnGap: '8px' }),
  },
}

interface TypoProps {
  size: Size
}
const MonthAndYear = ({ size, children }: PropsWithChildren<TypoProps>) => {
  return size === 'sm' ? (
    <Typography type="caption2">{children}</Typography>
  ) : (
    <Typography type="subTitle3">{children}</Typography>
  )
}

const DayOfTheWeek = ({ size, children }: PropsWithChildren<TypoProps>) => {
  return size === 'sm' ? (
    <Typography type="caption2">{children}</Typography>
  ) : (
    <Typography type="subTitle3">{children}</Typography>
  )
}
