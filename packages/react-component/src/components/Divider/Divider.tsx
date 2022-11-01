import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  margin?: Size
}

export const Divider = ({
  orientation = 'horizontal',
  margin: padding = 'md',
  ...rest
}: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      css={[
        { border: 0 },
        orientation === 'horizontal' && {
          width: '100%',
          borderTop: `1px solid ${theme.colors.black.lighter}`,
          marginTop: theme.spacing[padding],
          marginBottom: theme.spacing[padding],
        },
        orientation === 'vertical' && {
          width: '1px',
          height: 'auto',
          alignSelf: 'stretch',
          borderRight: `1px solid ${theme.colors.black.lighter}`,
          marginLeft: theme.spacing[padding],
          marginRight: theme.spacing[padding],
        },
      ]}
      {...rest}
    />
  )
}
