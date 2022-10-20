import { css, useTheme } from '@emotion/react'
import { DateTime } from 'luxon'

import { getMeridiem, ClockType, Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as ColonIcon } from '../images/colon.svg'

interface Props {
  size: Size
  clockType: ClockType
  date: DateTime
  onDateChange: (dateTime: DateTime) => void
  onClockTypeChange: (clock: ClockType) => void
}

export const ClockHeader = ({ size, date, clockType, onDateChange, onClockTypeChange }: Props) => {
  const theme = useTheme()
  return (
    <div
      css={{
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '8px',
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          css={[
            hourMinContainerCss.base,
            hourMinContainerCss.size[size],
            {
              backgroundColor:
                clockType === 'hour' ? theme.colors.blue.lighter : theme.colors.white.light,
            },
          ]}
          onClick={() => {
            if (clockType !== 'hour') {
              onClockTypeChange('hour')
            }
          }}
        >
          <HourMinLabel
            size={size}
            css={clockType === 'hour' ? { color: theme.colors.blue.main } : ''}
            label={date.toFormat('hh')}
          />
        </div>
        <ColonIcon />
        <div
          css={[
            hourMinContainerCss.base,
            hourMinContainerCss.size[size],
            {
              backgroundColor:
                clockType === 'hour' ? theme.colors.blue.lighter : theme.colors.white.light,
            },
          ]}
          onClick={() => {
            if (clockType !== 'min') {
              onClockTypeChange('min')
            }
          }}
        >
          <HourMinLabel
            size={size}
            css={clockType === 'min' ? css({ color: theme.colors.blue.main }) : ''}
            label={date.toFormat('mm')}
          />
        </div>
      </div>

      <div role="group" css={{ display: 'flex', flexDirection: 'column', borderRadius: '6px' }}>
        <button
          css={[
            buttonCss.base,
            buttonCss.size[size],
            buttonCss.am,
            { border: `1px solid ${theme.colors.gray.darker}` },
            getMeridiem(date) === 'am'
              ? { backgroundColor: theme.colors.blue.lighter, color: theme.colors.blue.main }
              : { backgroundColor: theme.colors.white.main, color: theme.colors.gray.main },
          ]}
          onClick={() => {
            if (getMeridiem(date) !== 'am') {
              onDateChange(date.minus({ hour: 12 }))
            }
          }}
        >
          <AmPmLabel
            size={size}
            css={{
              color: getMeridiem(date) === 'am' ? theme.colors.blue.main : theme.colors.gray.main,
            }}
            label="AM"
          />
        </button>
        <button
          css={[
            buttonCss.base,
            buttonCss.size[size],
            buttonCss.pm,
            { border: `1px solid ${theme.colors.gray.darker}`, borderTop: 0 },
            getMeridiem(date) === 'pm'
              ? { backgroundColor: theme.colors.blue.lighter, color: theme.colors.blue.main }
              : { backgroundColor: theme.colors.white.main, color: theme.colors.gray.main },
          ]}
          onClick={() => {
            if (getMeridiem(date) !== 'pm') {
              onDateChange(date.plus({ hour: 12 }))
            }
          }}
        >
          <AmPmLabel
            size={size}
            css={{
              color: getMeridiem(date) === 'pm' ? theme.colors.blue.main : theme.colors.gray.main,
            }}
            label="PM"
          />
        </button>
      </div>
    </div>
  )
}

interface Label {
  size: Size
  className?: string
  label: string
}

const AmPmLabel = ({ size, className, label }: Label) => {
  if (size === 'sm')
    return (
      <Typography type="caption2" className={className}>
        {label}
      </Typography>
    )
  return (
    <Typography type="subTitle3" className={className}>
      {label}
    </Typography>
  )
}

const HourMinLabel = ({ size, className, label }: Label) => {
  return (
    <Typography type={size === 'lg' ? 'h2' : 'h3'} className={className}>
      {label}
    </Typography>
  )
}

const hourMinContainerCss = {
  base: css({
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
  }),
  size: {
    sm: css({ height: '40px', width: '40px' }),
    md: css({ height: '50px', width: '50px' }),
    lg: css({ height: '60px', width: '60px' }),
  },
}

const buttonCss = {
  base: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: '2px solid transparent',
    outlineOffset: '2px',
  }),
  am: css({ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }),
  pm: css({ borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }),
  size: {
    sm: css({ height: '20px', width: '24px' }),
    md: css({ height: '25px', width: '30px' }),
    lg: css({ height: '30px', width: '32px' }),
  },
}
