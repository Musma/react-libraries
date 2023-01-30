import { useMemo } from 'react'

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

  /**
   * @description
   * 인풋을 클릭했을 때, 캘린더가 어느 위치에 열릴지 결정
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
   * 선택된 날짜의 월
   * @using
   * 달 넘기기 버튼과 표시에 사용
   */
  const month = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().month
    }

    return calendarStartDate.month
  }, [calendarStartDate])

  /**
   * @description
   * 선택된 날짜의 년
   * @using
   * 년 넘기기 버튼과 표시에 사용
   */
  const year = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().year
    }

    return calendarStartDate.year
  }, [calendarStartDate])

  /**
   * @selectedValue
   * 2023/01/19
   * @description
   * xx.startOf('month'): 선택된 날짜가 속한 달의 시작 일, 즉 1월 1일
   * @description
   * xx.startOf('month').startOf('week'): 그 1월 1일이 속한 주의 시작 일, 즉 12월 26일
   */
  const startDay = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().startOf('month').startOf('week')
    }

    return calendarStartDate.startOf('month').startOf('week')
  }, [calendarStartDate])

  /**
   * @selectedValue
   * 2023/01/19
   * @description
   * xx.endOf('month'): 선택된 날짜가 속한 달의 끝 일, 즉 1월 31일
   * @description
   * xx.endOf('month').endOf('week'): 그 31일이 속한 주의 끝나는 일, 즉 2월 6일
   */
  const endDay = useMemo(() => {
    if (!calendarStartDate) {
      return DateTime.now().endOf('month').endOf('week')
    }

    return calendarStartDate.endOf('month').endOf('week')
  }, [calendarStartDate])

  /**
   * @description
   * 달력에 표시되는 42개의 DateTime 객체가 배열에 담겨있음
   * @result
   * [26, 27, 28, 29, 30, 31, 1, 2, 3, 4 .....31, 1, 2, 3, 4, 5]
   */
  const calendar = useMemo(() => {
    // 마지막 반환문에서 배열내의 값을 달력 숫자로 체우기위해 +1 해준 것을 무마시키기 위해 -1
    let day = startDay.minus({ day: 1 })

    /**
     * diff: 'day'를 기준으로, day와 endDay간의 차이를 객체 형태로 반환
     * toObject: day값을 기준으로 프로퍼티와 값으로 뽑아줌
     * ( endDay - (startDay - 1) ) = diffDays
     * (select) 1/19 <> ( 2/5 - 12/26 ) = 42.66666
     */
    const diffDays = endDay.diff(day, 'days').toObject().days

    /**
     * const days = Array(Math.floor(diffDays) :
     * fill(0) : 배열안에 요소를 0으로 모두 체워줌 [0, 0, 0, 0 ...]
     * map(callback) : plus를 하지 않으면 배열 안에 요소가 모두 같음 [26, 26, 26 ,26....]
     * result: [26, 27, 28, 29, 30, 31, 1, 2, 3, 4 .....31, 1, 2, 3, 4, 5]
     */
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

  /**
   * @description
   * 캘린더 이외의 영역을 클릭했을 때 닫도록
   */
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

              /**
               * !calendarStartDate.hasSame(day, 'month') => calendarDateTime과 day의 Month가 같으면 true를 반환
               * 같지 않은 값 즉, false를 반환하는 값(현재 날짜가 속한 달 제외)에 적용
               */
              (calendarStartDate
                ? !calendarStartDate.hasSame(day, 'month')
                : !DateTime.now().hasSame(day, 'month')) && {
                color: theme.colors.gray.main,
              },

              /**
               * day: 선택된 날짜가 가리키고 있는 숫자
               * hasSame: startDate와 day가 같은 날짜인지 확인 후 boolean값을 반환
               */
              calendarStartDate &&
                calendarStartDate.hasSame(day, 'day') && {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.main,
                },

              /**
               * day: 선택된 날짜가 가리키고 있는 숫자
               * hasSame: startDate와 day가 같은 날짜인지 확인 후 boolean값을 반환
               */
              calendarEndDate &&
                calendarEndDate.hasSame(day, 'day') && {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.main,
                },
            ]}
            onClick={() => {
              if (!calendarStartDate && !calendarEndDate) {
                setCalendarStartDate(day)
              }

              if (calendarStartDate && calendarEndDate && day < calendarStartDate) {
                setCalendarStartDate(day)
              }

              if (calendarStartDate && calendarEndDate && day > calendarStartDate) {
                setCalendarEndDate(day)
              }

              if (calendarStartDate && !calendarEndDate) {
                setCalendarEndDate(day)
              }

              if (!calendarStartDate && calendarEndDate) {
                setCalendarStartDate(day)
              }
            }}
          >
            {day.toFormat('dd')}
          </Span>
        ))}
      </Box>
    </Box>
  )
}
