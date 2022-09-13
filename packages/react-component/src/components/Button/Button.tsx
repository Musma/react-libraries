import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react' // import 순서 및 정렬해주세요.

import { Typography } from 'src/components/Typography'
import { Size } from 'src/styles/theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  labelClassName?: string
  fullWidth?: boolean
  size?: Size | 'xs'
  variant?: 'outlined' | 'contained' | 'danger' // variant Type을 따로 뺴서 사용하는게 좋을 것 같습니다.
  icon?: ReactNode
}

export const Button = ({
  variant = 'contained',
  label,
  fullWidth = false,
  labelClassName = '',
  size = 'lg',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()
  if (disabled) {
    return (
      <DisabledButton fullWidth={fullWidth} className={className} size={size} {...rest}>
        <SizedLabel
          label={label}
          className={cx(css({ color: theme.color.gray.main }), labelClassName)}
          size={size}
        />
      </DisabledButton>
    )
  }
  switch (variant) {
    case 'contained':
      return (
        <ContainedButton fullWidth={fullWidth} className={className} size={size} {...rest}>
          <SizedLabel
            label={label}
            className={cx(css({ color: theme.color.white.main }), labelClassName)}
            size={size}
          />
        </ContainedButton>
      )
    case 'danger':
      return (
        <DangerButton fullWidth={fullWidth} className={className} size={size} {...rest}>
          <SizedLabel
            label={label}
            className={cx(css({ color: theme.color.white.main }), labelClassName)}
            size={size}
          />
        </DangerButton>
      )
    case 'outlined':
      return (
        <OutlinedButton fullWidth={fullWidth} className={className} size={size} {...rest}>
          <SizedLabel
            label={label}
            className={cx(css({ color: theme.color.blue.main }), labelClassName)}
            size={size}
          />
        </OutlinedButton>
      )
  }
}

interface SizedLabelProps {
  label: string
  className?: string
  size: Size | 'xs'
}
const SizedLabel = ({ label, className, size }: SizedLabelProps) => {
  if (size === 'lg') {
    return (
      <Typography type="body" variant="body3" className={className}>
        {label}
      </Typography>
    )
  }
  return (
    <Typography type="caption" className={className}>
      {label}
    </Typography>
  )
}

type BaseButtonProps = Omit<ButtonProps, 'label' | 'variant'>

const ButtonBase = ({ children, fullWidth, className, size = 'lg', ...rest }: BaseButtonProps) => {
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
      className={cx(
        { [css({ width: '100%' })]: fullWidth },
        css({
          appearance: 'none',
          border: 'solid 1px transparent',
          borderRadius: 6,
          '&:active': {
            boxShadow: 'inset -1px 2px 2px rgba(0, 0, 0, 0.25)',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          height,
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

const OutlinedButton = ({ children, className, size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      className={cx(
        css({
          backgroundColor: theme.color.white.main,
          border: `solid 1px ${theme.color.blue.main}`,
          '&:hover': {
            backgroundColor: theme.color.blue.lighter,
          },
          '&:active': {
            backgroundColor: theme.color.white.main,
          },
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}

const ContainedButton = ({ children, className, size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      className={cx(
        css({
          backgroundColor: theme.color.blue.main,
          '&:hover': {
            backgroundColor: `${theme.color.blue.main}E6`,
          },
          '&:active': {
            backgroundColor: theme.color.blue.dark,
          },
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}

const DangerButton = ({ children, className, size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      className={cx(
        css({
          backgroundColor: theme.color.red.main,
          '&:hover': {
            backgroundColor: `${theme.color.red.main}E6`,
          },
          '&:active': {
            backgroundColor: theme.color.red.dark,
          },
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}

const DisabledButton = ({ children, className, size, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      size={size}
      className={cx(
        css({
          backgroundColor: theme.color.white.lighter,
          cursor: 'not-allowed',
          '&:active': {
            boxShadow: 'none',
          },
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}
