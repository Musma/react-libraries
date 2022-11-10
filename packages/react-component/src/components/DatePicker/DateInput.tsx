import { useCallback, useEffect, useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import { FillCalendarIcon } from '@musma/react-icons'
import { DateTime } from 'luxon'

import { IconAdornment } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

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
  const theme = useTheme()
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [error, setError] = useState(false)

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

  const isDateValid = useMemo(() => {
    return DateTime.fromObject({ year: Number(year), month: Number(month), day: Number(day) })
      .isValid
  }, [day, month, year])

  useEffect(() => {
    if (!date) {
      return
    }

    setYear(`${date.year}`)
    setMonth(`${date.month}`.padStart(2, '0'))
    setDay(`${date.day}`.padStart(2, '0'))
  }, [date])

  useEffect(() => {
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
      return
    }

    if (!isDateValid) {
      setError(true)
      return
    }
    handleSelectDay(Number(year), Number(month), Number(day))
    setError(false)
  }, [day, handleSelectDay, isDateValid, month, year])

  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={toggleIsOpen}
    >
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.colors.white.main,
            borderRadius: theme.rounded.md,
            border: `1px solid ${theme.colors.gray.darker}`,
            paddingLeft: theme.spacing.sm,
            fontSize: theme.inputSize.fontSize[size],
            height: theme.inputSize.height[size],
            '&:focus': {
              border: `1px solid ${theme.colors.blue.main}`,
            },
          },
          error && { border: `1px solid ${theme.colors.red.main}` },
        ]}
      >
        <Box css={{ display: 'flex' }}>
          <InputBase
            value={year}
            placeholder="YYYY"
            maxLength={4}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => handleYearChange(e.target.value)}
            css={{
              color: theme.colors.black.dark,
              textAlign: 'center',
              width: size === 'sm' ? 32 : 38,
              '&::placeholder': {
                letterSpacing: '-0.08em',
              },
            }}
          />
          -
          <InputBase
            value={month}
            placeholder="MM"
            maxLength={2}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => handleMonthChange(e.target.value)}
            css={{
              color: theme.colors.black.dark,
              textAlign: 'center',
              width: size === 'sm' ? 20 : 28,
              '&::placeholder': {
                letterSpacing: '-0.08em',
              },
            }}
          />
          -
          <InputBase
            value={day}
            placeholder="DD"
            maxLength={2}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => handleDayChange(e.target.value)}
            css={[
              {
                color: theme.colors.black.dark,
                textAlign: 'center',
                width: size === 'sm' ? 20 : 28,
                '&::placeholder': { letterSpacing: '-0.08em' },
              },
            ]}
          />
        </Box>

        <Box
          css={[
            { marginRight: '8px' },
            size === 'sm' && {
              top: 5,
            },
            size === 'md' && {
              top: 7,
            },
            size === 'lg' && {
              top: 8,
            },
          ]}
        >
          <IconAdornment>
            <FillCalendarIcon width={16} height={16} />
          </IconAdornment>
        </Box>
      </Box>
    </Box>
  )
}
