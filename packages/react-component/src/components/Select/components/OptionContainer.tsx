import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

export const OptionContainer = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme()

  return (
    <Box
      css={{
        width: '100%',
        minHeight: 32,
        maxHeight: 300,
        position: 'absolute',
        top: `calc(100% + 4px)`,
        overflowY: 'auto',
        backgroundColor: theme.colors.white.main,
        borderRadius: theme.rounded.md,
        border: `1px solid ${theme.colors.gray.darker}`,
        padding: '4px 0px',
        zIndex: theme.zIndex.navBar + 1,
      }}
    >
      {children}
    </Box>
  )
}
