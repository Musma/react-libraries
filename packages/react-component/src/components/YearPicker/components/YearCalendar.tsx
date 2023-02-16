import { useEffect, useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import { ArrowLeftLargeIcon, ArrowRightLargeIcon } from '@musma/react-icons'
import {
  DateFormat,
  useOutsideListener,
  useSetRef,
  findIndex as lodashFindIndex,
} from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Divider, IconAdornment, TextButton, Typography } from 'src/components'
import { Box, Span } from 'src/elements'

import { AnchorOriginVerticalTypes } from '../YearPicker'

interface YearCalendarProps {
  inputRef: HTMLElement | null
  value?: string | null
  anchorOrigin?: {
    vertical: AnchorOriginVerticalTypes
  }
  onChange: (dateTime: string) => void
  onClose: () => void
}

const yearRange = {
  yearRange1: '2000-01-01',
  yearRange2: '2020-01-01',
  yearRange3: '2040-01-01',
} as const

/**
 * '2000 ~ 2019'년도까지 DateTime[]
 */
const yearRange1 = Array.from(new Array(20), (_, index) =>
  DateTime.fromISO(yearRange.yearRange1).plus({ year: index }),
)

/**
 * '2020 ~ 2039'년도까지 DateTime[]
 */
const yearRange2 = Array.from(new Array(20), (_, index) =>
  DateTime.fromISO(yearRange.yearRange2).plus({ year: index }),
)

/**
 * '2040 ~ 2059'년도까지 DateTime[]
 */
const yearRange3 = Array.from(new Array(20), (_, index) =>
  DateTime.fromISO(yearRange.yearRange3).plus({ year: index }),
)

/**
 * [Array(20), Array(20), Array(20)]
 */
const yearGroup = [yearRange1, yearRange2, yearRange3]

export const YearCalendar = ({
  value,
  anchorOrigin = {
    vertical: 'bottom',
  },
  onChange,
  onClose,
}: YearCalendarProps) => {
  const theme = useTheme()
  const [boxRef, setRef] = useSetRef()

  /**
   * @return DateTime
   */
  const initialDateTime = useMemo(() => {
    if (value) {
      return DateTime.fromISO(value)
    }
    return DateTime.now()
  }, [value])

  /**
   * @return number
   *
   * @description
   * value값이 속한 인덱스를 찾습니다
   */
  const yearGroupFindIndex = useMemo(() => {
    // initialDateTime이 속해있는 배열 안의 배열에서 인덱스를 찾습니다.
    // [-1, 7, -1]
    const findGroup = yearGroup.map((group) =>
      lodashFindIndex(group, { year: initialDateTime.year }),
    )
    // findGroup(Array)에서 '-1'이 아닌 숫자가 속한 인덱스를 찾습니다
    const findIndex = findGroup.findIndex((group) => group !== -1)

    return findIndex
  }, [initialDateTime])

  const [calendarIndex, setCalendarIndex] = useState(yearGroupFindIndex)
  const [calendar, setCalendar] = useState(yearGroup[calendarIndex])

  /**
   * 캘린더 이외의 영역을 클릭했을 때 닫도록
   */
  useOutsideListener(boxRef, () => {
    onClose()
  })

  /**
   * Today 버튼을 클릭하여, value값이 변경되면, 캘린더와 value값이 속한 인덱스로 변경합니다
   */
  useEffect(() => {
    setCalendar(yearGroup[yearGroupFindIndex])
    setCalendarIndex(yearGroupFindIndex)
  }, [initialDateTime])

  return (
    <Box
      ref={setRef}
      tabIndex={-1}
      css={[
        // Base CSS
        {
          position: 'absolute',
          zIndex: theme.zIndex.navBar + 1,
          backgroundColor: theme.colors.white.main,
          border: `1px solid ${theme.colors.gray.darker}`,
          borderRadius: theme.rounded.md,
        },
        // AnchorOrigin CSS
        {
          top: {
            top: -4,
            transform: 'translateY(-100%)',
          },
          bottom: {
            top: `calc(100% + 4px)`,
          },
        }[anchorOrigin.vertical],
      ]}
    >
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.colors.white.dark}`,
          padding: theme.spacing.sm,
        }}
      >
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          {/* -1 index Year (Prev) */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              setCalendar(yearGroup[calendarIndex - 1])
              setCalendarIndex((cur) => cur - 1)
            }}
            disabled={calendarIndex === 0}
          >
            <ArrowLeftLargeIcon
              color={calendarIndex === 0 ? theme.colors.gray.main : theme.colors.black.dark}
            />
          </IconAdornment>
        </Box>

        {/* 년 표시 */}
        <Typography type="subTitle2">{`${calendar[0].year} ~ ${
          calendar[calendar.length - 1].year
        }`}</Typography>

        <Box css={{ display: 'flex', alignItems: 'center' }}>
          {/* +1 index Year (Next) */}
          <IconAdornment
            noPadding={true}
            onClick={() => {
              setCalendar(yearGroup[calendarIndex + 1])
              setCalendarIndex((cur) => cur + 1)
            }}
            disabled={calendarIndex === yearGroup.length - 1}
          >
            <ArrowRightLargeIcon
              color={
                calendarIndex === yearGroup.length - 1
                  ? theme.colors.gray.main
                  : theme.colors.black.dark
              }
            />
          </IconAdornment>
        </Box>
      </Box>

      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          backgroundColor: theme.colors.white.main,
          borderRadius: theme.rounded.md,
          textAlign: 'center',
          padding: theme.spacing.md,
          gap: theme.spacing.lg,
        }}
      >
        {/* 년도 */}
        {calendar.map((year) => (
          <Span
            key={year.toFormat(DateFormat.YearToSecond)}
            css={[
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 24,
                borderRadius: 2,
                lineHeight: 1,
                color: theme.colors.black.main,
                fontSize: 12,
                userSelect: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: theme.colors.white.main,
                  backgroundColor: theme.colors.primary.main,
                },
              },

              // 시작년도 선택하면 primary main 색상으로 표시
              initialDateTime.hasSame(year, 'year') && {
                color: theme.colors.white.main,
                backgroundColor: theme.colors.primary.main,
              },
            ]}
            onClick={() => {
              onChange(year.toISO())
              onClose()
            }}
          >
            {year.toFormat(DateFormat.Year)}
          </Span>
        ))}
      </Box>

      <Divider />

      <Box
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          columnGap: theme.spacing.sm,
          padding: theme.spacing.sm,
        }}
      >
        <TextButton
          size="lg"
          onClick={() => {
            onChange(DateTime.now().toISO())
          }}
          css={{ color: theme.colors.blue.light }}
        >
          Today
        </TextButton>
      </Box>
    </Box>
  )
}
