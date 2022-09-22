import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Size } from 'src/styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelClassName?: string
  fullWidth?: boolean
  size?: Size | 'xs'
  variant?: 'outlined' | 'contained' | 'danger' // variant Type을 따로 뺴서 사용하는게 좋을 것 같습니다.
  icon?: ReactNode
}

export const Button = ({
  variant = 'contained',
  fullWidth = false,
  labelClassName = '',
  size = 'lg',
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  if (disabled) {
    return (
      <DisabledButton fullWidth={fullWidth} size={size} {...rest}>
        <SizedLabel
          className={cx(css({ color: theme.color.gray.main }), labelClassName)}
          size={size}
        >
          {children}
        </SizedLabel>
      </DisabledButton>
    )
  }

  switch (variant) {
    case 'contained':
      return (
        <ContainedButton fullWidth={fullWidth} size={size} {...rest}>
          <SizedLabel
            className={cx(css({ color: theme.color.white.main }), labelClassName)}
            size={size}
          >
            {children}
          </SizedLabel>
        </ContainedButton>
      )
    case 'danger':
      return (
        <DangerButton fullWidth={fullWidth} size={size} {...rest}>
          <SizedLabel
            className={cx(css({ color: theme.color.white.main }), labelClassName)}
            size={size}
          >
            {children}
          </SizedLabel>
        </DangerButton>
      )
    case 'outlined':
      return (
        <OutlinedButton fullWidth={fullWidth} size={size} {...rest}>
          <SizedLabel
            className={cx(css({ color: theme.color.blue.main }), labelClassName)}
            size={size}
          >
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
          '&:active': {
            boxShadow: 'inset -1px 2px 2px rgba(0, 0, 0, 0.25)',
            transform: 'translateY(1px)',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          height,
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
