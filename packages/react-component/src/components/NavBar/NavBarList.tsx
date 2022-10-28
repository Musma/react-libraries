import { SVGProps } from 'react'
import { Link, LinkProps, To } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { OutlineArrowTopLargeIcon } from '@musma/react-icons'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography } from 'src/components'

interface NavBarListProps extends Omit<LinkProps, 'to'> {
  active?: boolean
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  to?: To
}

export const NavBarList = ({
  active = false,
  children,
  icon: Icon,
  to,
  onClick,
  ...rest
}: NavBarListProps) => {
  const theme = useTheme()
  return (
    <Link
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        backgroundColor: active
          ? convertHexToRGB(theme.colors.primary.main, 0.1)
          : theme.colors.transparent,
        borderRadius: theme.rounded.lg,
        paddingLeft: theme.spacing.sm,
        paddingRight: theme.spacing.sm,
        color: active ? theme.colors.primary.main : theme.colors.black.dark,
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: convertHexToRGB(theme.colors.primary.main, 0.1),
          color: theme.colors.primary.main,
        },
      }}
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
      <Icon color="currentColor" width={16} height={16} css={{ marginRight: theme.spacing.md }} />

      <Typography type={active ? 'h6' : 'body2'} css={{ color: 'currentcolor' }}>
        {children}
      </Typography>

      {to && (
        <OutlineArrowTopLargeIcon
          color="currentColor"
          css={{
            marginLeft: 'auto',
            transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all 0.2s ease',
          }}
        />
      )}
    </Link>
  )
}
