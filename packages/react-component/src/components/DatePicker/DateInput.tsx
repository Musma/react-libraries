import { useCallback, useEffect, useState } from 'react'

import { css, useTheme } from '@emotion/react'
import { FillCalendarIcon } from '@musma/react-icons'
import { DateTime } from 'luxon'

import { Box, IconAdornment, InputBase } from 'src/components'
import { Size } from 'src/types'

const iconContainerCss = {
  position: {
    lg: css({ top: '8px' }),
    md: css({ top: '7px' }),
    sm: css({ top: '5px' }),
  },
}

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
  const [isError, setIsError] = useState(false)

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

  const isDateValid = useCallback(() => {
    return DateTime.fromObject({ year: Number(year), month: Number(month), day: Number(day) })
      .isValid
  }, [day, month, year])

  useEffect(() => {
    if (!date) return
    setYear(`${date.year}`)
    setMonth(`${date.month}`.padStart(2, '0'))
    setDay(`${date.day}`.padStart(2, '0'))
  }, [date])

  useEffect(() => {
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) return
    if (!isDateValid()) {
      setIsError(true)
      return
    }
    handleSelectDay(Number(year), Number(month), Number(day))
    setIsError(false)
  }, [day, handleSelectDay, isDateValid, month, year])

  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => toggleIsOpen()}
    >
      <Box
        css={[
          {
            backgroundColor: theme.colors.white.main,
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: theme.rounded.md,
            border: `1px solid ${theme.colors.gray.darker}`,
            paddingLeft: theme.spacing.sm,
            fontSize: size === 'lg' ? 14 : 12,
            height: theme.inputSize[size],
            '&:focus': {
              border: `1px solid ${theme.colors.blue.main}`,
            },
          },
          isError && { border: `1px solid ${theme.colors.red.main}` },
        ]}
      >
        <Box css={{ display: 'flex' }}>
          <InputBase
            placeholder="YYYY"
            onClick={(e) => e.stopPropagation()}
            value={year}
            onChange={(e) => handleYearChange(e.target.value)}
            maxLength={4}
            css={{
              color: theme.colors.black.dark,
              appearance: 'none',
              textAlign: 'center',
              border: 0,
              '&:focus': {
                outline: '2px solid transparent',
                outlineOffset: '2px',
              },
              '&::placeholder': {
                letterSpacing: '-0.08em',
              },
              width: size === 'sm' ? '32px' : '38px',
            }}
          />
          -
          <InputBase
            placeholder="MM"
            onClick={(e) => e.stopPropagation()}
            value={month}
            onChange={(e) => handleMonthChange(e.target.value)}
            maxLength={2}
            css={{
              color: theme.colors.black.dark,
              appearance: 'none',
              textAlign: 'center',
              border: 0,
              '&:focus': {
                outline: '2px solid transparent',
                outlineOffset: '2px',
              },
              '&::placeholder': {
                letterSpacing: '-0.08em',
              },
              width: size === 'sm' ? '24px' : '28px',
            }}
          />
          -
          <InputBase
            placeholder="DD"
            onClick={(e) => e.stopPropagation()}
            value={day}
            onChange={(e) => handleDayChange(e.target.value)}
            maxLength={2}
            css={[
              {
                color: theme.colors.black.dark,
                appearance: 'none',
                textAlign: 'center',
                border: 0,
                '&:focus': {
                  outline: '2px solid transparent',
                  outlineOffset: '2px',
                },
                '&::placeholder': { letterSpacing: '-0.08em' },
                width: size === 'sm' ? '20px' : '28px',
              },
            ]}
          />
        </Box>

        <Box css={[{ marginRight: '8px' }, iconContainerCss.position[size]]}>
          <IconAdornment onClick={toggleIsOpen}>
            <FillCalendarIcon width={16} height={16} />
          </IconAdornment>
        </Box>
      </Box>
    </Box>
  )
}
