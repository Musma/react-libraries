import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  margin?: Size
}

export const Divider = ({ orientation = 'horizontal', margin = 'md', ...rest }: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      css={[
        { border: 0 },
        orientation === 'horizontal' && {
          width: '100%',
          borderTop: `1px solid ${theme.colors.gray.lighter}`,
          marginTop: theme.spacing[margin],
          marginBottom: theme.spacing[margin],
        },
        orientation === 'vertical' && {
          width: '1px',
          height: 'auto',
          alignSelf: 'stretch',
          borderRight: `1px solid ${theme.colors.gray.lighter}`,
          marginLeft: theme.spacing[margin],
          marginRight: theme.spacing[margin],
        },
      ]}
      {...rest}
    />
  )
}
