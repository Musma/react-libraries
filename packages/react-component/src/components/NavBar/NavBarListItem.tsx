import { Link, LinkProps } from 'react-router-dom'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

interface NavBarListItemProps extends LinkProps {
  active?: boolean
  activeColor: string
}

export const NavBarListItem = ({
  active = false,
  activeColor,
  children,
  ...rest
}: NavBarListItemProps) => {
  const theme = useTheme()
  return (
    <Link
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        borderRadius: theme.rounded.lg,
        paddingLeft: 52,
        color: active ? activeColor : theme.colors.black.dark,
        margin: '4px 0px',
        textDecoration: 'none',
        '&:hover': {
          color: activeColor,
        },
        '&:last-of-type': {
          marginBottom: 0,
        },
      }}
      {...rest}
    >
      <Typography type={active ? 'subTitle2' : 'body3'} css={{ color: 'currentcolor' }}>
        {children}
      </Typography>
    </Link>
  )
}
