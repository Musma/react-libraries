import { HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { ButtonBase } from 'src/elements'

import { Indicator } from './components'
import { useTabContext } from './TabContext'

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  value: string
  label: string
}

export const Tab = ({ value, label, ...rest }: TabProps) => {
  const theme = useTheme()
  const { value: tabValue, onTabValueChange, variant = 'hat' } = useTabContext({ name: 'Tab' })

  const active = useMemo(() => {
    return tabValue === value
  }, [value, tabValue])

  const showIndicator = useMemo(() => {
    return variant === 'rect' && active
  }, [variant, active])

  return (
    <ButtonBase
      role="tab"
      tabIndex={-1}
      css={[
        {
          minWidth: 120,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
          backgroundColor: theme.colors.transparent,
          whiteSpace: 'nowrap',
          position: 'relative',
        },
        variant === 'hat' && {
          color: active ? theme.colors.black.main : theme.colors.gray.darker,
          borderWidth: active ? 1 : 0,
          borderStyle: 'solid',
          borderColor: theme.colors.gray.darker,
          borderBottom: 'none',
          borderTopLeftRadius: active ? theme.spacing.sm : 0,
          borderTopRightRadius: active ? theme.spacing.sm : 0,
          backgroundColor: active ? theme.colors.white.main : theme.colors.transparent,
        },
        variant === 'rect' && {
          color: active ? theme.colors.primary.main : theme.colors.gray.darker,
          position: 'relative',
          '&:not(:first-of-type)': {
            '&:before': {
              position: 'absolute',
              left: 0,
              top: 'auto',
              bottom: 'auto',
              content: '" "',
              width: 1,
              height: 16,
              backgroundColor: theme.colors.gray.darker,
            },
          },
        },
      ]}
      onClick={() => {
        onTabValueChange(value)
      }}
      {...rest}
    >
      <Typography type="subTitle2" css={{ color: 'currentcolor' }}>
        {label}
      </Typography>

      {showIndicator && active && <Indicator />}
    </ButtonBase>
  )
}
