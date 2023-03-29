import { useCallback, useMemo, useRef, useState } from 'react'

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

interface RangeCalendarProps {
  inputRef: HTMLElement | null
  locale?: string
  startDate: DateTime | null
  endDate: DateTime | null
  minDate?: DateTime
  maxDate?: DateTime
  anchorOrigin?: {
    vertical: 'bottom' | 'top'
  }
  onClose: () => void
  onChange: (date: [string | null, string | null]) => void
}

export const RangeCalendar = ({
  locale = 'ko',
  anchorOrigin = {
    vertical: 'bottom',
  },
  startDate,
  endDate,
  minDate,
  maxDate,
  onClose,
  onChange,
}: RangeCalendarProps) => {
  const theme = useTheme()
  const [boxRef, setRef] = useSetRef()
  const { current: prevStartDateTime } = useRef<DateTime>(startDate)
  const { current: prevEndDateTime } = useRef<DateTime>(endDate)

  const [baseDateTime, setBaseDateTime] = useState(startDate ? startDate : DateTime.now())

  const [mouseOverDateTime, setMouseOverDateTime] = useState<DateTime | null>(null)

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
   * 시작일과 종료일 사이 날짜의 색 변경
   */
  const isDifferenceDates = useCallback(
    (currentDay: DateTime, startDate?: DateTime | null, endDate?: DateTime | null) => {
      if (!startDate || !endDate) {
        return
      }

      // endDate에 startOf를 한 이유 => RangeCalendar에 props로 전달받는 endDate에 endOf('day')가 있기 때문입니다.
      return currentDay > startDate && currentDay < endDate.startOf('day')
    },
    [startDate, endDate],
  )

  /**
   * @description
   * 마우스오버를 할 때, 날짜의 색 변경
   */
  const isMouseOverEvent = useCallback(
    (
      mouseOverDateTime: DateTime | null,
      currentDay: DateTime,
      startDate?: DateTime | null,
      endDate?: DateTime | null,
    ) => {
      if (!startDate || endDate || !mouseOverDateTime) {
        return
      }
      return currentDay > startDate && currentDay < mouseOverDateTime
    },
    [startDate, endDate],
  )

  /**
   * @description
   * 시작일, 종료일 선택 실행 함수
   */
  const handleRangePicker = useCallback(
    (currentDay: DateTime, startDate?: DateTime | null, endDate?: DateTime | null) => {
      // 종료일이 선택되어있으면, 시작일 선택
      if (endDate && !startDate) {
        onChange([currentDay.startOf('day').toISO(), endDate.toISO()])
      }

      // 시작일과 종료일이 선택되어 있지 않았을 때, 첫 선택일은 시작일
      if (!startDate && !endDate) {
        onChange([currentDay.startOf('day').toISO(), null])
      }

      // 시작일이 선택되어 있을 때,
      if (startDate && !endDate) {
        // 시작일이 선택일보다 크면 시작일 재선택
        if (startDate > currentDay) {
          onChange([currentDay.startOf('day').toISO(), null])
          return
        }
        // 아니라면, 종료일 선택
        onChange([startDate.toISO(), currentDay.endOf('day').toISO()])
        onClose()
      }

      // 시작일과 종료일 모두 선택되어 있으면,
      if (startDate && endDate) {
        // 시작일을 선택하고, 종료일을 초기화
        onChange([currentDay.startOf('day').toISO(), null])
      }
    },
    [startDate, endDate],
  )

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

  useOutsideListener(boxRef, () => {
    // 시작일만 선택하고, 종료일을 선택하지 않고 캘린더를 닫아버리면,
    if (startDate && !endDate) {
      if (prevStartDateTime && prevEndDateTime) {
        const prevStartDate = prevStartDateTime.startOf('day').toISO()
        const prevEndDate = prevEndDateTime.endOf('day').toISO()

        onChange([prevStartDate, prevEndDate])
      }
    }

    onClose()
  })

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
        {calendar.map((day) => {
          return (
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

                // 당월 제외 되는 날짜를 그레이색으로 표시
                !baseDateTime.hasSame(day, 'month') && {
                  color: theme.colors.gray.main,
                },

                // 시작일 선택하면 primary 진한색으로 표시
                startDate &&
                  startDate.hasSame(day, 'day') && {
                    color: theme.colors.white.main,
                    backgroundColor: theme.colors.primary.main,
                  },

                // 종료일 선택하면 primary 진한색으로 표시
                endDate &&
                  endDate.hasSame(day, 'day') && {
                    color: theme.colors.white.main,
                    backgroundColor: theme.colors.primary.main,
                  },

                // 시작일과 종료일 사이 날짜가 primary 옅은색으로 모두 표시
                isDifferenceDates(day, startDate, endDate) && {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.lighter,
                },

                // 시작일이 선택되어 있으면, mouseOver 한 곳 까지 primary 옅은색으로 표시
                isMouseOverEvent(mouseOverDateTime, day, startDate, endDate) && {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.lighter,
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
              onClick={() => handleRangePicker(day, startDate, endDate)}
              onMouseOver={() => startDate && setMouseOverDateTime(day)}
            >
              {day.toFormat('dd')}
            </Span>
          )
        })}
      </Box>
    </Box>
  )
}
