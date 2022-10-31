import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { ButtonBase, Typography } from 'src/components'
import { Size } from 'src/types'

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  fullWidth?: boolean
}

export const TextButton = ({
  size = 'md',
  fullWidth = false,
  children,
  ...rest
}: TextButtonProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      css={[
        {
          height: theme.inputSize[size],
          backgroundColor: theme.colors.transparent,
          '&:hover': {
            borderRadius: theme.rounded.md,
            backgroundColor: theme.buttonBackgroundColor,
          },
        },
        fullWidth && { width: '100%' },
      ]}
      {...rest}
    >
      <Typography type={size === 'lg' ? 'body3' : 'caption1'}>{children}</Typography>
    </ButtonBase>
  )
}
