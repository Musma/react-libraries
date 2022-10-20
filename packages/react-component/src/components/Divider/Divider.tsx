import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = ({ orientation = 'horizontal', ...rest }: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      css={[
        { border: 0 },
        orientation === 'horizontal'
          ? { width: '100%', borderTop: `1px solid ${theme.colors.gray.lighter}` }
          : { height: '100%', width: '1px', borderRight: `1px solid ${theme.colors.gray.lighter}` },
      ]}
      {...rest}
    />
  )
}
