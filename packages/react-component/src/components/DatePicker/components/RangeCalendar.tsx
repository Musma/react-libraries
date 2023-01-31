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

import { DATE_FORMAT, DaysOfTheWeek, Language, Months } from './constants'

interface RangeCalendarProps {
  inputRef: HTMLElement | null
  i18n?: string
  startDate?: DateTime | null
  endDate?: DateTime | null
  minDate?: DateTime
  maxDate?: DateTime
  anchorOrigin?: {
    vertical: 'bottom' | 'top'
  }
  onClose: () => void
  onChange: (date: [DateTime | null, DateTime | null]) => void
}

export const RangeCalendar = ({
  i18n = 'ko',
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

  const [baseDateTime, setBaseDateTime] = useState(startDate ? startDate : DateTime.local())
  const [endDateTime, setEndDateTime] = useState(endDate ? endDate : DateTime.local())
  const [mouseOverDateTime, setMouseOverDateTime] = useState<DateTime | null>(null)

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
  const i18nCalendarDate = useMemo(() => {
    if (i18n === Language.ko) {
      return `${baseYear}년 ${Months.ko[baseMonth - 1]}`
    }
    return `${Months.en[baseMonth - 1]} ${baseYear}`
  }, [i18n, baseDateTime])

  /**
   * @example
   * (ko) 월, 화, 수, 목, 금, 토, 일
   * (en) Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
   */
  const i18nCalendarDayOfTheWeek = useMemo(() => {
    if (i18n === Language.ko) {
      return DaysOfTheWeek.ko
    }
    return DaysOfTheWeek.en
  }, [i18n, baseDateTime])

  /**
   * @description
   * 시작일과 종료일 사이 날짜의 색 변경
   */
  const isDifferenceDates = useCallback(
    (currentDay: DateTime, startDate?: DateTime | null, endDate?: DateTime | null) => {
      if (!startDate || !endDate) {
        return
      }
      return currentDay > startDate && currentDay < endDate
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
        onChange([currentDay, endDate])
      }

      // 시작일과 종료일이 선택되어 있지 않았을 때, 첫 선택일은 시작일
      if (!startDate && !endDate) {
        onChange([currentDay, null])
      }

      // 시작일이 선택되어 있을 때,
      if (startDate && !endDate) {
        // 시작일이 선택일보다 크면 시작일 재선택
        if (startDate > currentDay) {
          onChange([currentDay, null])
          return
        }
        // 아니라면, 종료일 선택
        onChange([startDate, currentDay])
        onClose()
      }

      // 시작일과 종료일 모두 선택되어 있으면,
      if (startDate && endDate) {
        // 선택일과 시작일 사이의 거리를 계산
        const calcStartDate = () => {
          if (currentDay > startDate) {
            return currentDay.diff(startDate, 'days').toObject().days
          }
          return startDate.diff(currentDay, 'days').toObject().days
        }

        // 선택일과 종료일 사이의 거리를 계산
        const calcEndDate = () => {
          if (currentDay > endDate) {
            return currentDay.diff(endDate, 'days').toObject().days
          }
          return endDate.diff(currentDay, 'days').toObject().days
        }

        if (!calcStartDate || !calcEndDate) {
          return
        }

        // 선택일이 시작일보다 앞에 있으면 선택일 재선택
        // 선택일이 종료일보다 뒤에 있으면 선택일 재선택
        if (currentDay < startDate || currentDay > endDate) {
          onChange([currentDay, null])
          return
        }

        // 선택일이 종료일보다 시작일에 가까우면 시작일 재선택
        if (calcStartDate < calcEndDate) {
          onChange([currentDay, endDate])
          onClose()
        }

        // 선택일이 시작일보다 종료일에 가까우면 종료일 재선택
        if (calcStartDate > calcEndDate) {
          onChange([startDate, currentDay])
          onClose()
        }

        // 선택일이 시작일과 종료일과 동일한 선상이면 시작일 재선택
        if (calcStartDate === calcEndDate) {
          onChange([currentDay, endDate])
          onClose()
        }
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
    onClose()
  })

  /**
   * (시작일 or 종료일)을 클릭하면 캘린더에 바로 반영
   */
  useEffect(() => {
    if (startDate) {
      setBaseDateTime(startDate)
    }
    if (endDate) {
      setEndDateTime(endDate)
    }
  }, [startDate, endDate])

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
        <Typography type="subTitle2">{i18nCalendarDate}</Typography>

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
        {i18nCalendarDayOfTheWeek.map((week) => (
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
                baseDateTime.hasSame(day, 'day') && {
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
