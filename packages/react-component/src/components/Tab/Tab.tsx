import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { ButtonBase } from 'src/elements'

import { useTabContext } from './TabContext'

export interface TabProps<T extends string | number> {
  value: T
  label: string
}

export const Tab = <T extends string | number>({ value, label }: TabProps<T>) => {
  const theme = useTheme()
  const { value: tabValue, onTabValueChange, variant = 'hat' } = useTabContext({ name: 'Tab' })

  const active = useMemo(() => {
    return tabValue === value
  }, [value, tabValue])

  return (
    <ButtonBase
      role="tab"
      tabIndex={-1}
      css={[
        {
          flex: 1,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
          backgroundColor: theme.colors.transparent,
          whiteSpace: 'nowrap',
        },
        variant === 'hat' && {
          color: active ? theme.colors.black.main : theme.colors.gray.darker,
          borderWidth: active ? 1 : 0,
          borderStyle: 'solid',
          borderColor: theme.colors.gray.darker,
          borderBottom: 'none',
          borderTopLeftRadius: active ? 8 : 0,
          borderTopRightRadius: active ? 8 : 0,
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
    >
      <Typography type="subTitle2" css={{ color: 'currentcolor' }}>
        {label}
      </Typography>
    </ButtonBase>
  )
}
