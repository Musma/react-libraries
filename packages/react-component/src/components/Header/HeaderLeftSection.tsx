import { SVGProps } from 'react'
import { Link, To } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { OutlineMenuIcon } from '@musma/react-icons'

import { Box, IconAdornment } from 'src/components'

interface HeaderLeftSectionProps {
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element
  onMenuClick: () => void
  to: To
}

export const HeaderLeftSection = ({ to, logo: Logo, onMenuClick }: HeaderLeftSectionProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: theme.layoutSize.navBarWidth,
      }}
    >
      <Link to={to}>
        <Logo />
      </Link>

      <IconAdornment onClick={onMenuClick}>
        <OutlineMenuIcon />
      </IconAdornment>
    </Box>
  )
}
