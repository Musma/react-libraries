import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface OptionContainerProps {
  /**
   * option dropbox가 위치할 곳(기본 값 bottom)
   */
  position?: string
  children?: ReactNode
}

export const OptionContainer = ({ position = 'bottom', children }: OptionContainerProps) => {
  const theme = useTheme()

  return (
    <Box
      css={{
        width: '100%',
        minHeight: 32,
        maxHeight: 300,
        position: 'absolute',
        top: position === 'bottom' ? `calc(100% + 4px)` : position === 'top' ? undefined : 0,
        bottom: position === 'top' ? `calc(100% + 4px)` : undefined,
        right: position === 'left' ? `calc(100% + 4px)` : undefined,
        left: position === 'right' ? `calc(100% + 4px)` : undefined,
        overflowY: 'auto',
        backgroundColor: theme.colors.white.main,
        borderRadius: theme.rounded.md,
        border: `1px solid ${theme.colors.gray.darker}`,
        padding: '4px 0px',
        zIndex: theme.zIndex.navBar - 1,
      }}
    >
      {children}
    </Box>
  )
}
