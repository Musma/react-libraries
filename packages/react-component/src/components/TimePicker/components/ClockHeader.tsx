import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { DateTime } from 'luxon'

import { getMeridiem, ClockType, Typography } from 'src/components'
import { Size } from 'src/styles/DefaultTheme'

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
      className={css({
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '8px',
      })}
    >
      <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
        <div
          className={cx(
            hourMinContainerCss.base,
            hourMinContainerCss.size[size],
            css({
              backgroundColor:
                clockType === 'hour' ? theme.color.blue.lighter : theme.color.white.light,
            }),
          )}
          onClick={() => {
            if (clockType !== 'hour') {
              onClockTypeChange('hour')
            }
          }}
        >
          <HourMinLabel
            size={size}
            className={clockType === 'hour' ? css({ color: theme.color.blue.main }) : ''}
            label={date.toFormat('hh')}
          />
        </div>
        <ColonIcon />
        <div
          className={cx(
            hourMinContainerCss.base,
            hourMinContainerCss.size[size],
            css({
              backgroundColor:
                clockType === 'hour' ? theme.color.blue.lighter : theme.color.white.light,
            }),
          )}
          onClick={() => {
            if (clockType !== 'min') {
              onClockTypeChange('min')
            }
          }}
        >
          <HourMinLabel
            size={size}
            className={clockType === 'min' ? css({ color: theme.color.blue.main }) : ''}
            label={date.toFormat('mm')}
          />
        </div>
      </div>

      <div
        role="group"
        className={css({ display: 'flex', flexDirection: 'column', borderRadius: '6px' })}
      >
        <button
          className={cx(
            buttonCss.base,
            buttonCss.size[size],
            buttonCss.am,
            css({ border: `1px solid ${theme.color.gray.darker}` }),
            getMeridiem(date) === 'am'
              ? css({ backgroundColor: theme.color.blue.lighter, color: theme.color.blue.main })
              : css({ backgroundColor: theme.color.white.main, color: theme.color.gray.main }),
          )}
          onClick={() => {
            if (getMeridiem(date) !== 'am') {
              onDateChange(date.minus({ hour: 12 }))
            }
          }}
        >
          <AmPmLabel
            size={size}
            className={css({
              color: getMeridiem(date) === 'am' ? theme.color.blue.main : theme.color.gray.main,
            })}
            label="AM"
          />
        </button>
        <button
          className={cx(
            buttonCss.base,
            buttonCss.size[size],
            buttonCss.pm,
            css({ border: `1px solid ${theme.color.gray.darker}`, borderTop: 0 }),
            getMeridiem(date) === 'pm'
              ? css({ backgroundColor: theme.color.blue.lighter, color: theme.color.blue.main })
              : css({ backgroundColor: theme.color.white.main, color: theme.color.gray.main }),
          )}
          onClick={() => {
            if (getMeridiem(date) !== 'pm') {
              onDateChange(date.plus({ hour: 12 }))
            }
          }}
        >
          <AmPmLabel
            size={size}
            className={css({
              color: getMeridiem(date) === 'pm' ? theme.color.blue.main : theme.color.gray.main,
            })}
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
