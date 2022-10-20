import { ReactNode, SVGProps } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineArrowTopLargeIcon } from '@musma/react-icons'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography, Box } from 'src/components'

interface NavBarListProps {
  active?: boolean
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  activeColor: string
  children?: ReactNode
  onClick?: () => void
}

export const NavBarList = ({
  active = false,
  children,
  activeColor,
  icon: Icon,
  onClick,
}: NavBarListProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        backgroundColor: active ? convertHexToRGB(activeColor, 0.1) : theme.colors.transparent,
        borderRadius: theme.rounded.lg,
        paddingLeft: theme.spacing.sm,
        paddingRight: theme.spacing.sm,
        color: active ? activeColor : theme.colors.black.dark,
        '&:hover': {
          backgroundColor: convertHexToRGB(activeColor, 0.1),
        },
      }}
      onClick={onClick}
    >
      {Icon && <Icon color="currentColor" css={{ marginRight: theme.spacing.md }} />}

      <Typography type={active ? 'h6' : 'body2'} css={{ color: 'currentcolor' }}>
        {children}
      </Typography>

      <OutlineArrowTopLargeIcon
        color="currentColor"
        css={{
          marginLeft: 'auto',
          transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'all 0.2s ease',
        }}
      />
    </Box>
  )
}
