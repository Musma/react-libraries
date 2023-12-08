import { HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Flex, Typography } from 'src/components'
import { Box, ButtonBase } from 'src/elements'

import { Indicator } from './components'
import { useTabContext } from './TabContext'

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  value: string
  label: string
}

export const Tab = ({ value, label, className, ...rest }: TabProps) => {
  const theme = useTheme()
  const { value: tabValue, onTabValueChange, variant = 'hat' } = useTabContext({ name: 'Tab' })

  const active = useMemo(() => {
    return tabValue === value
  }, [value, tabValue])

  const showIndicator = useMemo(() => {
    return variant === 'rect' && active
  }, [variant, active])

  if (variant === 'hat') {
    return (
      <Flex
        direction="column"
        onClick={() => onTabValueChange(value)}
        css={{
          '&:active': {
            transform: 'translateY(1px)',
          },
        }}
      >
        <ButtonBase
          role="tab"
          tabIndex={-1}
          css={{
            minWidth: 120,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: theme.spacing.lg,
            paddingRight: theme.spacing.lg,
            whiteSpace: 'nowrap',
            position: 'relative',
            color: active ? theme.colors.black.dark : theme.colors.gray.darker,
            borderWidth: active ? 1 : 0,
            borderStyle: 'solid',
            borderColor: theme.colors.gray.darker,
            borderBottom: 'none',
            borderTopLeftRadius: active ? theme.spacing.sm : 0,
            borderTopRightRadius: active ? theme.spacing.sm : 0,
            backgroundColor: active ? theme.colors.white.main : theme.colors.transparent,
            paddingTop: 10,
            left: 5,
            '&:active': {
              transform: 'unset',
            },
          }}
          className={className}
          {...rest}
        >
          <Typography type="subTitle2" css={{ color: 'currentcolor' }}>
            {label}
          </Typography>
        </ButtonBase>

        {/* 끝 둥글게 */}
        <Flex
          justify="between"
          css={{
            position: 'relative',
            left: 5,
            height: 10,
            backgroundColor: active ? theme.colors.white.main : theme.colors.transparent,
            cursor: 'pointer',
          }}
          className={className}
        >
          <Box
            css={[
              {
                width: 6,
                height: '100%',
              },
              active && {
                position: 'relative',
                left: '-5px',
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: theme.colors.gray.darker,
                borderRadius: '0px 0px 14px 2px / 0px 0px 12px 0px',
              },
            ]}
          />

          <Box
            css={[
              {
                width: 6,
                height: '100%',
              },
              active && {
                position: 'relative',
                right: '-5px',
                borderTopWidth: 0,
                borderLeftWidth: 1,
                borderRightWidth: 0,
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: theme.colors.gray.darker,
                borderRadius: '0px 0px 2px 14px / 0px 0px 0px 12px',
              },
            ]}
          />
        </Flex>
      </Flex>
    )
  }

  return (
    <ButtonBase
      role="tab"
      tabIndex={-1}
      css={{
        minWidth: 120,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        backgroundColor: theme.colors.transparent,
        whiteSpace: 'nowrap',
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
      }}
      onClick={() => onTabValueChange(value)}
      {...rest}
    >
      <Typography type="subTitle2" css={{ color: 'currentcolor' }}>
        {label}
      </Typography>

      {showIndicator && active && <Indicator />}
    </ButtonBase>
  )
}
