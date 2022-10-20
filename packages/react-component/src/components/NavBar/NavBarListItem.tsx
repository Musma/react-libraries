import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Typography, Box } from 'src/components'

interface NavBarListItemProps {
  active?: boolean
  activeColor: string
  children?: ReactNode
  onClick?: () => void
}

export const NavBarListItem = ({
  active = false,
  children,
  activeColor,
  onClick,
}: NavBarListItemProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        borderRadius: theme.rounded.lg,
        paddingLeft: 52,
        color: active ? activeColor : theme.colors.black.dark,
        margin: '4px 0px',
        '&:hover': {
          color: activeColor,
        },
        '&:last-of-type': {
          marginBottom: 0,
        },
      }}
      onClick={onClick}
    >
      <Typography type={active ? 'subTitle2' : 'body3'} css={{ color: 'currentcolor' }}>
        {children}
      </Typography>
    </Box>
  )
}
