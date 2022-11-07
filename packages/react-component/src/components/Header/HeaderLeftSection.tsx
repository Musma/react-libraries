import { SVGProps } from 'react'
import { Link, To } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { OutlineMenuIcon } from '@musma/react-icons'

import { IconAdornment } from 'src/components'
import { Box } from 'src/elements'

interface HeaderLeftSectionProps {
  to: To
  disablePadding?: boolean
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element
  onMenuClick?: () => void
}

export const HeaderLeftSection = ({
  to,
  disablePadding = false,
  logo: Logo,
  onMenuClick,
}: HeaderLeftSectionProps) => {
  const theme = useTheme()
  return (
    <Box
      css={[
        {
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: theme.layoutSize.navBarWidth,
        },
        disablePadding && {
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
        },
      ]}
    >
      <Link to={to}>
        <Logo />
      </Link>

      {onMenuClick && (
        <IconAdornment onClick={onMenuClick}>
          <OutlineMenuIcon />
        </IconAdornment>
      )}
    </Box>
  )
}
