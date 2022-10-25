import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  padding?: Size
}

export const Divider = ({ orientation = 'horizontal', padding = 'md', ...rest }: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      css={[
        { border: 0 },
        orientation === 'horizontal'
          ? { width: '100%', borderTop: `1px solid ${theme.colors.black.lighter}` }
          : {
              height: 'auto',
              alignSelf: 'stretch',
              width: '1px',
              borderRight: `1px solid ${theme.colors.black.lighter}`,
              marginLeft: theme.spacing[padding],
              marginRight: theme.spacing[padding],
            },
      ]}
      {...rest}
    />
  )
}
