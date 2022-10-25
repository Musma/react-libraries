import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/components'

interface AuthShellProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImage: string
}

export const AuthShell = ({ backgroundImage, ...rest }: AuthShellProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        backgroundSize: 'cover',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        minWidth: theme.layoutSize.minBodyWidth,
      }}
      {...rest}
    />
  )
}
