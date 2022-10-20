import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/components'

interface AppShellProps {
  header: ReactNode
  navBar: ReactNode
  children: ReactNode
}

export const AppShell = ({ header, navBar, children }: AppShellProps) => {
  const theme = useTheme()
  return (
    <Box>
      {header}
      {navBar}
      <main
        css={{
          width: '100%',
          paddingTop: theme.layoutSize.headerHeight,
          paddingLeft: theme.layoutSize.navBarWidth,
          backgroundColor: theme.colors.white.light,
        }}
      >
        {children}
      </main>
    </Box>
  )
}
