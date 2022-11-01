import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface AuthShellProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImage: string
}

export const AuthShell = ({ backgroundImage, ...rest }: AuthShellProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        minWidth: theme.layoutSize.minBodyWidth,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`,
      }}
      {...rest}
    />
  )
}
