import { LabelHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Label } from 'src/elements'
import { Size } from 'src/types'

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: Size
  required?: boolean
}

export const InputLabel = ({
  size = 'md',
  required = false,
  children,
  ...rest
}: InputLabelProps) => {
  const theme = useTheme()
  return (
    <Label {...rest}>
      <Typography
        type={size === 'lg' ? 'subTitle2' : 'subTitle3'}
        css={[
          required && {
            '&:after': {
              color: theme.colors.red.main,
              content: "'*'",
              fontSize: 12,
              fontWeight: 600,
            },
          },
        ]}
      >
        {children}
      </Typography>
    </Label>
  )
}
