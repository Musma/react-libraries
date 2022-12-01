import { useCallback, useEffect, useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  OutlineArrowFirstLargeIcon,
  OutlineArrowLastLargeIcon,
  OutlineArrowLeftLargeIcon,
  OutlineArrowRightLargeIcon,
} from '@musma/react-icons'
import { useOutsideListener, useSetRef } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Backdrop, DATE_FORMAT, IconAdornment, Typography } from 'src/components'
import { Box, Span } from 'src/elements'

const DAYS_OF_THE_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

interface CalendarProps {
  value: DateTime
  inputRef: HTMLElement | null
  minDate?: DateTime
  maxDate?: DateTime
  onChange: (dateTime: DateTime) => void
  onClose: () => void
}

export const Calendar = ({
  value,
  inputRef,
  minDate,
  maxDate,
  onChange,
  onClose,
}: CalendarProps) => {
  const theme = useTheme()
  const [boxRef, setRef] = useSetRef()
  const [calendarDateTime, setCalendarDateTime] = useState(value)

  /**
   * 캘린더의 위치 계산
   */
  const calendarPosition = useMemo(() => {
    if (inputRef) {
      const { top, left, height } = inputRef.getBoundingClientRect()

      return {
        top: top + height + 4,
        left: left,
      }
    }
  }, [inputRef])

  const month = useMemo(() => {
    return calendarDateTime.month
  }, [calendarDateTime])

  const year = useMemo(() => {
    return calendarDateTime.year
  }, [calendarDateTime])

  // 달의 첫번쨰 시작 날짜
  const startDay = useMemo(() => {
    return calendarDateTime.startOf('month').startOf('week')
  }, [calendarDateTime])

  // 달의 마지막 주차의 마지막 날짜
  const endDay = useMemo(() => {
    return calendarDateTime.endOf('month').endOf('week')
  }, [calendarDateTime])

  const calendar = useMemo(() => {
    // map으로 순회하면서 Day를 하루씩 더하면서 배열에 넣기때문에 하루를 뺴고 시작
    let day = startDay.minus({ day: 1 })

    // 해당 월의 마지막 날짜에서 day
    const diffDays = endDay.diff(day, 'days').toObject().days

    if (diffDays) {
      // days 차가 딱 정수로 떨어지지 않아서 소수점 자리를 버림
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
   * value가 바뀌면 calendarDateTime의 값도 변경됨
   */
  useEffect(() => {
    setCalendarDateTime(value)
  }, [value])

  return (
    <Backdrop disableDimmed={true} disableOverflowHidden={true}>
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
              padding: '8px 16px',
            },
          ]}
        >
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            {/* Prev Year */}
            <IconAdornment
              noPadding={true}
              onClick={() => {
                const dateTime = calendarDateTime.minus({ year: 1 })
                setCalendarDateTime(dateTime)
              }}
            >
              <OutlineArrowFirstLargeIcon />
            </IconAdornment>

            {/* Prev Month */}
            <IconAdornment
              noPadding={true}
              onClick={() => {
                const dateTime = calendarDateTime.minus({ month: 1 })
                setCalendarDateTime(dateTime)
              }}
            >
              <OutlineArrowLeftLargeIcon />
            </IconAdornment>
          </Box>

          <Box css={{ marginLeft: 40, marginRight: 40 }}>
            <Typography type="subTitle2">{`${MONTHS[month - 1]} ${year}`}</Typography>
          </Box>

          <Box css={{ display: 'flex', alignItems: 'center' }}>
            {/* Next Month */}
            <IconAdornment
              noPadding={true}
              onClick={() => {
                const dateTime = calendarDateTime.plus({ month: 1 })
                setCalendarDateTime(dateTime)
              }}
            >
              <OutlineArrowRightLargeIcon />
            </IconAdornment>

            {/* Next Year */}
            <IconAdornment
              noPadding={true}
              onClick={() => {
                const dateTime = calendarDateTime.plus({ year: 1 })
                setCalendarDateTime(dateTime)
              }}
            >
              <OutlineArrowLastLargeIcon />
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
                // 현재 달력에 나타나는 달의 날짜가 아닌 경우
                !calendarDateTime.hasSame(day, 'month') && {
                  color: theme.colors.gray.main,
                },
                // value로 받은 DateTime과 같은 날인지
                value.hasSame(day, 'day') && {
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
                onChange(day)
              }}
            >
              {day.toFormat('dd')}
            </Span>
          ))}
        </Box>
      </Box>
    </Backdrop>
  )
}
