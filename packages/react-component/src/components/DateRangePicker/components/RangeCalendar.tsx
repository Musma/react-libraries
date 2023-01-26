import { useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  ArrowFirstLargeIcon,
  ArrowLastLargeIcon,
  ArrowLeftLargeIcon,
  ArrowRightLargeIcon,
} from '@musma/react-icons'
import { useOutsideListener, useSetRef } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { DATE_FORMAT, IconAdornment, Typography } from 'src/components'
import { Box, Span } from 'src/elements'

const DAYS_OF_THE_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

interface RangeCalendarProps {
  inputRef: HTMLElement | null
  anchorOrigin?: {
    vertical: 'bottom' | 'top'
  }
  calendarStartDate: DateTime | null
  calendarEndDate: DateTime | null
  onClose: () => void
  setCalendarStartDate: React.Dispatch<React.SetStateAction<DateTime | null>>
  setCalendarEndDate: React.Dispatch<React.SetStateAction<DateTime | null>>
}

export const RangeCalendar = ({
  anchorOrigin = {
    vertical: 'bottom',
  },
  calendarStartDate,
  calendarEndDate,
  onClose,
  setCalendarStartDate,
  setCalendarEndDate,
}: RangeCalendarProps) => {
  const theme = useTheme()
  const [boxRef, setRef] = useSetRef()
  const [overEndDate, setOverEndDate] = useState<DateTime | null>(null)

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

  const month = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().month
    }

    return calendarStartDate.month
  }, [calendarStartDate])

  const year = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().year
    }

    return calendarStartDate.year
  }, [calendarStartDate])

  const startDay = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().startOf('month').startOf('week')
    }

    return calendarStartDate.startOf('month').startOf('week')
  }, [calendarStartDate])

  const endDay = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().endOf('month').endOf('week')
    }

    return calendarStartDate.endOf('month').endOf('week')
  }, [calendarStartDate])

  const calendar = useMemo(() => {
    let day = startDay.minus({ day: 1 })

    const diffDays = endDay.diff(day, 'days').toObject().days

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
  }, [endDay, startDay])

  const handleMouseOverDate = (currentDay: DateTime) => {
    if (!calendarStartDate) {
      return false
    }

    // day가 시작일보다 클 때,
    // day가
    if (currentDay > calendarStartDate && currentDay < overEndDate) {
      if (calendarEndDate) {
        return false
      }
      return true
    }
  }

  useOutsideListener(boxRef, () => {
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
              const dateTime = calendarStartDate
                ? calendarStartDate.minus({ year: 1 })
                : DateTime.now().minus({ year: 1 })
              setCalendarStartDate(dateTime)
            }}
          >
            <ArrowFirstLargeIcon />
          </IconAdornment>

          {/* Prev Month */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = calendarStartDate
                ? calendarStartDate.minus({ month: 1 })
                : DateTime.now().minus({ month: 1 })
              setCalendarStartDate(dateTime)
            }}
          >
            <ArrowLeftLargeIcon />
          </IconAdornment>
        </Box>

        {/* 월, 년 표시 */}
        <Typography type="subTitle2">{`${MONTHS[month - 1]} ${year}`}</Typography>

        <Box css={{ display: 'flex', alignItems: 'center' }}>
          {/* Next Month */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = calendarStartDate
                ? calendarStartDate.plus({ month: 1 })
                : DateTime.now().plus({ month: 1 })
              setCalendarStartDate(dateTime)
            }}
          >
            <ArrowRightLargeIcon />
          </IconAdornment>

          {/* Next Year */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              const dateTime = calendarStartDate
                ? calendarStartDate.plus({ year: 1 })
                : DateTime.now().plus({ year: 1 })
              setCalendarStartDate(dateTime)
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
        {DAYS_OF_THE_WEEK.map((week) => (
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

                // 당월 제외 되는 날짜를 그레이색!ㅋㅋ으로 표시
                (calendarStartDate
                  ? !calendarStartDate.hasSame(day, 'month')
                  : !DateTime.now().hasSame(day, 'month')) && {
                  color: theme.colors.gray.main,
                },

                // 시작일 선택하면 primary 진한색으로 표시
                calendarStartDate &&
                  calendarStartDate.hasSame(day, 'day') && {
                    color: theme.colors.white.main,
                    backgroundColor: theme.colors.primary.main,
                  },

                // 종료일 선택하면 primary 진한색으로 표시
                calendarEndDate &&
                  calendarEndDate.hasSame(day, 'day') && {
                    color: theme.colors.white.main,
                    backgroundColor: theme.colors.primary.main,
                  },

                // 시작일과 종료일 사이 날짜가 primary 옅은색으로 모두 표시
                calendarStartDate &&
                  calendarEndDate &&
                  day > calendarStartDate &&
                  day < calendarEndDate && {
                    color: theme.colors.white.main,
                    backgroundColor: theme.colors.primary.lighter,
                  },

                // 시작일이 선택되어 있으면, mouseOver 한 곳 까지 primary 옅은색으로 표시
                handleMouseOverDate(day) && {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.lighter,
                },
              ]}
              onClick={() => {
                if (calendarStartDate && calendarEndDate) {
                  if (day < calendarStartDate) {
                    setCalendarStartDate(day)
                    onClose()
                  }

                  if (day > calendarStartDate) {
                    setCalendarEndDate(day)
                    onClose()
                  }
                }

                if (calendarStartDate && !calendarEndDate) {
                  setCalendarEndDate(day)
                  onClose()
                }

                if (!calendarStartDate && calendarEndDate) {
                  setCalendarStartDate(day)
                }
              }}
              onMouseOver={() => {
                if (calendarStartDate) {
                  setOverEndDate(day)
                }
              }}
            >
              {day.toFormat('dd')}
            </Span>
          )
        })}
      </Box>
    </Box>
  )
}
