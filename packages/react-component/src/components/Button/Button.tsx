import { ButtonHTMLAttributes, CSSProperties, Fragment, ReactNode, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Size } from 'src/types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelStyle?: CSSProperties
  fullWidth?: boolean
  size?: Size | 'xs'
  variant?: 'outlined' | 'contained' | 'danger' // variant Type을 따로 뺴서 사용하는게 좋을 것 같습니다.
  icon?: JSX.Element
}

export const Button = ({
  variant = 'contained',
  fullWidth = false,
  labelStyle = {},
  size = 'lg',
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  if (disabled) {
    return (
      <DisabledButton fullWidth={fullWidth} size={size} {...rest}>
        <Icon icon={rest?.icon} disabled={disabled} />
        <SizedLabel css={[{ color: theme.color.white.main, ...labelStyle }]} size={size}>
          {children}
        </SizedLabel>
      </DisabledButton>
    )
  }

  switch (variant) {
    case 'contained':
      return (
        <ContainedButton fullWidth={fullWidth} size={size} {...rest}>
          <Icon icon={rest?.icon} disabled={disabled} />
          <SizedLabel css={{ color: theme.color.white.main, ...labelStyle }} size={size}>
            {children}
          </SizedLabel>
        </ContainedButton>
      )
    case 'danger':
      return (
        <DangerButton fullWidth={fullWidth} size={size} {...rest}>
          <Icon icon={rest?.icon} disabled={disabled} />
          <SizedLabel css={{ color: theme.color.white.main, ...labelStyle }} size={size}>
            {children}
          </SizedLabel>
        </DangerButton>
      )
    case 'outlined':
      return (
        <OutlinedButton fullWidth={fullWidth} size={size} {...rest}>
          <Icon icon={rest?.icon} disabled={disabled} />
          <SizedLabel css={{ color: theme.color.blue.main, ...labelStyle }} size={size}>
            {children}
          </SizedLabel>
        </OutlinedButton>
      )
  }
}

interface SizedLabelProps {
  className?: string
  size: Size | 'xs'
  children: ReactNode
}

const SizedLabel = ({ size, ...rest }: SizedLabelProps) => {
  if (size === 'lg') {
    return <Typography type="body3" {...rest} />
  }

  return <Typography type="caption1" {...rest} />
}

interface IconProps {
  icon?: JSX.Element
  disabled?: boolean
}

const Icon = ({ disabled, icon }: IconProps) => {
  if (icon) {
    return (
      <span
        css={{
          display: 'inline-flex',
          marginRight: '3px',
          filter: disabled ? 'brightness(1000%)' : 'none',
        }}
      >
        {icon}
      </span>
    )
  }

  return <Fragment />
}

type BaseButtonProps = Omit<ButtonProps, 'label' | 'variant'>

const ButtonBase = ({ fullWidth, size = 'lg', ...rest }: BaseButtonProps) => {
  const height = useMemo(() => {
    return {
      lg: '32px',
      md: '28px',
      sm: '26px',
      xs: '24px',
    }[size]
  }, [size])

  return (
    <button
      css={[
        {
          appearance: 'none',
          border: 'solid 1px transparent',
          borderRadius: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 64,
          padding: 8,
          cursor: 'pointer',
          height,
          '&:active': {
            transform: 'translateY(1px)',
          },
        },
        fullWidth && { width: '100%' },
      ]}
      {...rest}
    />
  )
}

const OutlinedButton = ({ size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      css={{
        backgroundColor: theme.color.white.main,
        border: `solid 1px ${theme.color.blue.main}`,
        '&:hover': {
          backgroundColor: theme.color.blue.lighter,
        },
        '&:active': {
          backgroundColor: theme.color.white.main,
        },
      }}
      {...rest}
    />
  )
}

const ContainedButton = ({ size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      css={{
        backgroundColor: theme.color.blue.main,
        '&:hover': {
          backgroundColor: `${theme.color.blue.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.color.blue.dark,
        },
      }}
      {...rest}
    />
  )
}

const DangerButton = ({ size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      css={{
        backgroundColor: theme.color.red.main,
        '&:hover': {
          backgroundColor: `${theme.color.red.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.color.red.dark,
        },
      }}
      {...rest}
    />
  )
}

const DisabledButton = ({ size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      css={{
        backgroundColor: theme.color.white.lighter,
        cursor: 'not-allowed',
        '&:active': {
          boxShadow: 'none',
          transform: 'none',
        },
      }}
      {...rest}
    />
  )
}
