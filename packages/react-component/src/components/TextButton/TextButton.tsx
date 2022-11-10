import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { ButtonBase } from 'src/elements'
import { Size } from 'src/types'

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @description
   */
  size?: Size
  /**
   * @description
   */
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
          height: theme.inputSize.height[size],
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
