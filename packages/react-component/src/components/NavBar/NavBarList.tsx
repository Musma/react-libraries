import { SVGProps } from 'react'
import { NavLink, NavLinkProps, To } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { OutlineArrowTopLargeIcon } from '@musma/react-icons'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography } from 'src/components'
import { Box } from 'src/elements'

export type ReactSvgJSX = (props: SVGProps<SVGSVGElement>) => JSX.Element

interface NavBarListProps extends Omit<NavLinkProps, 'to'> {
  label: string
  icon: ReactSvgJSX
  to?: To
}

export const NavBarList = ({ label, icon: Icon, to, onClick, ...rest }: NavBarListProps) => {
  const theme = useTheme()
  return (
    <NavLink
      css={{ textDecoration: 'none', margin: '8px 0px' }}
      to={to ?? '/'}
      onClick={(e) => {
        if (!to) {
          e.preventDefault()
        }

        if (onClick) {
          onClick(e)
        }
      }}
      {...rest}
    >
      {({ isActive }) => (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            height: 40,
            backgroundColor: isActive
              ? convertHexToRGB(theme.colors.primary.main, 0.1)
              : theme.colors.transparent,
            borderRadius: theme.rounded.lg,
            paddingLeft: theme.spacing.sm,
            paddingRight: theme.spacing.sm,
            color: isActive ? theme.colors.primary.main : theme.colors.black.dark,
            '&:hover': {
              backgroundColor: convertHexToRGB(theme.colors.primary.main, 0.1),
              color: theme.colors.primary.main,
            },
          }}
        >
          <Icon
            color="currentColor"
            width={16}
            height={16}
            css={{ marginRight: theme.spacing.md }}
          />

          <Typography type={isActive ? 'h6' : 'body2'} css={{ color: 'currentcolor' }}>
            {label}
          </Typography>

          {!to && (
            <OutlineArrowTopLargeIcon
              color="currentColor"
              css={{
                marginLeft: 'auto',
                transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'all 0.2s ease',
              }}
            />
          )}
        </Box>
      )}
    </NavLink>
  )
}
