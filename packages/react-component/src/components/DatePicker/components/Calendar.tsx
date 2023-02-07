import { useCallback, useEffect, useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  ArrowFirstLargeIcon,
  ArrowLastLargeIcon,
  ArrowLeftLargeIcon,
  ArrowRightLargeIcon,
} from '@musma/react-icons'
import { useOutsideListener, useSetRef } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { IconAdornment, Typography } from 'src/components'
import { Box, Span } from 'src/elements'

import { DATE_FORMAT, DaysOfTheWeek, Locale, Months } from './constants'

interface CalendarProps {
  inputRef: HTMLElement | null
  locale?: string
  value?: string | null
  minDate?: DateTime
  maxDate?: DateTime
  anchorOrigin?: {
    vertical: 'bottom' | 'top'
  }
  onClose: () => void
  onChange: (date: string) => void
}

export const Calendar = ({
  locale = 'ko',
  anchorOrigin = {
    vertical: 'bottom',
  },
  value,
  minDate,
  maxDate,
  onClose,
  onChange,
}: CalendarProps) => {
  const theme = useTheme()
  const [boxRef, setRef] = useSetRef()

  const initialDateTime = useMemo(() => {
    if (value) {
      return DateTime.fromISO(value)
    }
    return DateTime.local()
  }, [value])

  const [baseDateTime, setBaseDateTime] = useState(initialDateTime)

  /**
   * @description
   * 캘린더가 열릴 위치
   */
  const calendarPosition = useMemo(() => {
    if (anchorOrigin.vertical === 'top') {
      return {
        top: -4,
        transform: 'translateY(-100%)',
      }
    }

    return {
      top: `calc(100% + 4px)`,
    }
  }, [anchorOrigin.vertical])

  /**
   * @description
   * 기준 달
   */
  const baseMonth = useMemo(() => {
    return baseDateTime.month
  }, [baseDateTime])

  /**
   * @description
   * 기준 년
   */
  const baseYear = useMemo(() => {
    return baseDateTime.year
  }, [baseDateTime])

  /**
   * @description
   * 42일 기준 캘린더의 시작일
   * @example
   * (base) 1/7, (start) 12/26
   */
  const calendarStartDay = useMemo(() => {
    return baseDateTime.startOf('month').startOf('week')
  }, [baseDateTime])

  /**
   * @description
   * 42일 기준 캘린더의 종료일
   * @example
   * (base) 1/7, (end) 2/5
   */
  const calendarEndDay = useMemo(() => {
    return baseDateTime.endOf('month').endOf('week')
  }, [baseDateTime])

  /**
   * @description
   * 캘린더 렌더링 주체 (42일)
   */
  const calendar = useMemo(() => {
    let day = calendarStartDay.minus({ day: 1 })

    const diffDays = calendarEndDay.diff(day, 'days').toObject().days

    if (diffDays) {
      const days = Array(Math.floor(diffDays))
        .fill(0)
        .map(() => {
          day = day.plus({ days: 1 })
          return day
        })
      return days
    }
    return []
  }, [calendarEndDay, calendarStartDay])

  /**
   * @example
   * (ko) 2023년 1월
   * (en) Jun, 2023
   */
  const yearAndMonth = useMemo(() => {
    if (locale === Locale.ko) {
      return `${baseYear}년 ${Months.ko[baseMonth - 1]}`
    }
    return `${Months.en[baseMonth - 1]} ${baseYear}`
  }, [locale, baseDateTime])

  /**
   * @example
   * (ko) 월, 화, 수, 목, 금, 토, 일
   * (en) Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
   */
  const dayOfTheWeek = useMemo(() => {
    if (locale === Locale.ko) {
      return DaysOfTheWeek.ko
    }
    return DaysOfTheWeek.en
  }, [locale, baseDateTime])

  /**
   * @description
   * minDate, maxDate 옵션
   */
  const isInvalidDate = useCallback(
    (date: DateTime) => {
      if (minDate && maxDate) {
        return minDate >= date || maxDate <= date
      }

      if (minDate) {
        return minDate >= date
      }

      if (maxDate) {
        return maxDate <= date
      }

      return false
    },
    [maxDate, minDate],
  )

  /**
   * 캘린더 이외의 영역을 클릭했을 때 닫도록
   */
  useOutsideListener(boxRef, () => {
    onClose()
  })

  /**
   * (날짜)를 클릭하면 캘린더에 바로 반영
   */
  useEffect(() => {
    setBaseDateTime(initialDateTime)
  }, [value])

  return (
    <Box
      ref={setRef}
      tabIndex={-1}
      css={{
        backgroundColor: theme.colors.white.main,
        border: `1px solid ${theme.colors.gray.darker}`,
        borderRadius: theme.rounded.md,
        position: 'absolute',
        zIndex: theme.zIndex.navBar + 1,
        ...calendarPosition,
      }}
    >
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.colors.white.dark}`,
            padding: theme.spacing.sm,
          },
        ]}
      >
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          {/* Prev Year */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = baseDateTime.minus({ year: 1 })
              setBaseDateTime(dateTime)
            }}
          >
            <ArrowFirstLargeIcon />
          </IconAdornment>

          {/* Prev Month */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = baseDateTime.minus({ month: 1 })
              setBaseDateTime(dateTime)
            }}
          >
            <ArrowLeftLargeIcon />
          </IconAdornment>
        </Box>

        {/* 월, 년 표시 */}
        <Typography type="subTitle2">{yearAndMonth}</Typography>

        <Box css={{ display: 'flex', alignItems: 'center' }}>
          {/* Next Month */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = baseDateTime.plus({ month: 1 })
              setBaseDateTime(dateTime)
            }}
          >
            <ArrowRightLargeIcon />
          </IconAdornment>

          {/* Next Year */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = baseDateTime.plus({ year: 1 })
              setBaseDateTime(dateTime)
            }}
          >
            <ArrowLastLargeIcon />
          </IconAdornment>
        </Box>
      </Box>

      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          backgroundColor: theme.colors.white.main,
          borderRadius: theme.rounded.md,
          textAlign: 'center',
          padding: theme.spacing.md,
          gap: theme.spacing.sm,
        }}
      >
        {/* Monday ~ Sunday 날짜 */}
        {dayOfTheWeek.map((week) => (
          <Typography
            key={week}
            type="subTitle3"
            css={{
              width: 20,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {week}
          </Typography>
        ))}

        {/* 일자  */}
        {calendar.map((day) => (
          <Span
            key={day.toFormat(DATE_FORMAT)}
            css={[
              {
                width: 20,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                lineHeight: 1,
                fontSize: 12,
                userSelect: 'none',
                borderRadius: 2,
                color: theme.colors.black.main,
                '&:hover': {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.main,
                },
              },
              // 당월 제외 되는 날짜를 모두 gray main 색상으로 표시
              !baseDateTime.hasSame(day, 'month') && {
                color: theme.colors.gray.main,
              },

              // 시작일 선택하면 primary main 색상으로 표시
              initialDateTime.hasSame(day, 'day') && {
                color: theme.colors.white.main,
                backgroundColor: theme.colors.primary.main,
              },

              // minDate, maxDate를 체크하여 클릭이 가능한 유효한 날짜인지
              isInvalidDate(day) && {
                pointerEvents: 'none',
                backgroundColor: 'inherit',
                '&:hover': {
                  cursor: 'not-allowed',
                },
              },
            ]}
            onClick={() => {
              onChange(day.toISO())
              onClose()
            }}
          >
            {day.toFormat('dd')}
          </Span>
        ))}
      </Box>
    </Box>
  )
}
