import { NavLink, NavLinkProps } from 'react-router-dom'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Box } from 'src/elements'

interface NavBarListItemProps extends NavLinkProps {
  label: string
}

export const NavBarListItem = ({ label, ...rest }: NavBarListItemProps) => {
  const theme = useTheme()
  return (
    <NavLink css={{ textDecoration: 'none', margin: '8px 0px' }} {...rest}>
      {({ isActive }) => (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            height: 40,
            borderRadius: theme.rounded.lg,
            paddingLeft: 40,
            '&:hover': {
              color: theme.colors.primary.main,
            },
          }}
        >
          <Typography
            type={isActive ? 'subTitle2' : 'body3'}
            css={{ color: isActive ? theme.colors.primary.main : theme.colors.black.dark }}
          >
            {label}
          </Typography>
        </Box>
      )}
    </NavLink>
  )
}
