import { css, cx } from '@emotion/css'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Size } from 'src/styles/theme'
import { Typography } from 'src/components/Typography'
import { useTheme } from '@emotion/react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  labelClassName?: string
  size?: Size | 'xs'
  variant: 'outlined' | 'contained' | 'danger'
  icon?: ReactNode
}

export const Button = ({
  variant,
  label,
  labelClassName = '',
  size = 'lg',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()
  if (disabled) {
    return (
      <DisabledButton className={className} {...rest}>
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
        <ContainedButton className={className} {...rest}>
          <SizedLabel
            label={label}
            className={cx(css({ color: theme.color.white.main }), labelClassName)}
            size={size}
          />
        </ContainedButton>
      )
    case 'danger':
      return (
        <DangerButton className={className} {...rest}>
          <SizedLabel
            label={label}
            className={cx(css({ color: theme.color.white.main }), labelClassName)}
            size={size}
          />
        </DangerButton>
      )
    case 'outlined':
      return (
        <OutlinedButton className={className} {...rest}>
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

const getheight = (size: Size | 'xs') => {
  return {
    lg: 32,
    md: 28,
    sm: 26,
    xs: 24,
  }[size]
}

type BaseButtonProps = Omit<ButtonProps, 'label' | 'variant'>

const ButtonBase = ({ children, className, size = 'lg', ...rest }: BaseButtonProps) => {
  return (
    <button
      className={cx(
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
          height: getheight(size),
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

const OutlinedButton = ({ children, className, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
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

const ContainedButton = ({ children, className, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
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

const DangerButton = ({ children, className, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
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

const DisabledButton = ({ children, className, ...rest }: BaseButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
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
