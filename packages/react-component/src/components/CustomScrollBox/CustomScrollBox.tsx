import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

type CustomScrollBoxProps = HTMLAttributes<HTMLDivElement>

export const CustomScrollBox = (props: CustomScrollBoxProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: 12,
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#D9D9D9',
          borderRadius: 8,
          border: '4px solid transparent',
          backgroundClip: 'padding-box',
        },
        '&::-webkit-scrollbar-track': {
          background: theme.colors.transparent,
        },
      }}
      {...props}
    />
  )
}
