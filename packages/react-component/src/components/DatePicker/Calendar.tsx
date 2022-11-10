import { PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  OutlineArrowFirstLargeIcon,
  OutlineArrowFirstMediumIcon,
  OutlineArrowLastLargeIcon,
  OutlineArrowLastMediumIcon,
  OutlineArrowLeftLargeIcon,
  OutlineArrowLeftMediumIcon,
  OutlineArrowRightLargeIcon,
  OutlineArrowRightMediumIcon,
} from '@musma/react-icons'
import { DateTime } from 'luxon'

import { IconAdornment, Typography } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface CalendarProps {
  size: Size
  date: DateTime | undefined
  handleSelectDay: (y: number, m: number, d: number) => void
}

const DAYS_OF_THE_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getStartDayOfMonth(year: number, month: number) {
  return DateTime.fromObject({ year, month, day: 1 }).weekday
}

export const Calendar = ({ size, date, handleSelectDay }: CalendarProps) => {
  const theme = useTheme()

  const [year, setYear] = useState(DateTime.local().year)
  const [month, setMonth] = useState(DateTime.local().month)
  const [startDay, setStartDay] = useState(getStartDayOfMonth(year, month))

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

  const createSlots = useCallback(() => {
    const daysInMonth = DateTime.local(year, month).daysInMonth
    const length = daysInMonth + startDay > 35 ? 42 : 35
    return Array.from({ length }).map((_, index) => {
      if (isPrevMonth(index)) {
        const prevMonthDay =
          DateTime.local(year, getPrevMonth()).daysInMonth - (startDay - 1) + index
        return (
          <Box
            key={index}
            css={[
              {
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1px',
              },
              size === 'sm' && { height: 18 },
              size === 'md' && { height: 25 },
              size === 'lg' && { height: 25 },
            ]}
            onClick={() => handleSelectPrevMonthDay(prevMonthDay)}
          >
            <Typography
              type={size === 'sm' ? 'caption2' : 'caption1'}
              css={{ color: theme.colors.gray.main }}
            >
              {prevMonthDay}
            </Typography>
          </Box>
        )
      }

      if (isCurrentMonth(index)) {
        const day = index + 1 - startDay
        return (
          <Box
            key={index}
            css={[
              {
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1px',
              },
              size === 'sm' && { height: 18 },
              size === 'md' && { height: 25 },
              size === 'lg' && { height: 25 },
              isToday(day) && !isSelectedDay(day) && { backgroundColor: theme.colors.blue.main },
              isSelectedDay(day) && { backgroundColor: theme.colors.blue.lighter },
            ]}
            onClick={() => handleDayClick(year, month, day)}
          >
            <Typography
              type={size === 'sm' ? 'caption2' : 'caption1'}
              css={{ color: getColor(day) }}
            >
              {day}
            </Typography>
          </Box>
        )
      }

      if (isNextMonth(index)) {
        const nextMonthDay = index - (daysInMonth + startDay - 1)
        return (
          <div
            key={index}
            css={[
              {
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1px',
              },
              size === 'sm' && { height: 18 },
              size === 'md' && { height: 25 },
              size === 'lg' && { height: 25 },
            ]}
            onClick={() => handleSelectNextMonthDay(nextMonthDay)}
          >
            <Typography
              type={size === 'sm' ? 'caption2' : 'caption1'}
              css={{ color: theme.colors.gray.main }}
            >
              {nextMonthDay}
            </Typography>
          </div>
        )
      }
    })

    function getColor(day: number) {
      if (isToday(day) && !isSelectedDay(day)) return theme.colors.white.main
      if (isSelectedDay(day)) return theme.colors.blue.main
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
    if (!date) {
      return
    }

    setYear(date.year)
    setMonth(date.month)
  }, [date])

  return (
    <Box
      css={[
        {
          width: '100%',
          borderRadius: '4px',
          zIndex: theme.zIndex.navBar + 1,
          position: 'absolute',
          top: 'calc(100% + 4px)',
          border: `1px solid ${theme.colors.gray.darker}`,
          backgroundColor: theme.colors.white.main,
        },
      ]}
    >
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.colors.white.dark}`,
          },
          size === 'sm' && { height: 24 },
          size === 'md' && { height: 34 },
          size === 'lg' && { height: 34 },
        ]}
      >
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <IconAdornment onClick={() => setYear(year - 1)}>
            {size === 'sm' ? <OutlineArrowFirstMediumIcon /> : <OutlineArrowFirstLargeIcon />}
          </IconAdornment>

          <IconAdornment onClick={handlePrevMonthClick}>
            {size === 'sm' ? <OutlineArrowLeftMediumIcon /> : <OutlineArrowLeftLargeIcon />}
          </IconAdornment>
        </Box>

        <MonthAndYear size={size}>
          {MONTHS[month - 1]} {year}
        </MonthAndYear>

        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <IconAdornment onClick={handleNextMonthClick}>
            {size === 'sm' ? <OutlineArrowRightMediumIcon /> : <OutlineArrowRightLargeIcon />}
          </IconAdornment>

          <IconAdornment onClick={() => setYear(year + 1)}>
            {size === 'sm' ? <OutlineArrowLastMediumIcon /> : <OutlineArrowLastLargeIcon />}
          </IconAdornment>
        </Box>
      </Box>

      <Box
        css={[
          {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            rowGap: '4px',
            padding: '8px',
          },
          size === 'sm' && { gap: 4 },
          size === 'md' && { gap: 8 },
          size === 'lg' && { gap: 8 },
        ]}
      >
        {DAYS_OF_THE_WEEK.map((d) => (
          <Box
            key={d}
            css={{
              display: 'flex',
              height: '18px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <DayOfTheWeek key={d} size={size}>
              {d}
            </DayOfTheWeek>
          </Box>
        ))}
        {createSlots()}
      </Box>
    </Box>
  )
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
