import { SVGProps } from 'react'

import { useTheme } from '@emotion/react'

import { Box, IconAdornment } from 'src/components'

interface HeaderLeftSectionProps {
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element
  onMenuClick: () => void
}

export const HeaderLeftSection = ({ logo: Logo, onMenuClick }: HeaderLeftSectionProps) => {
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
      <Logo />

      <IconAdornment onClick={onMenuClick}>
        {/* <MenuSvg width={24} height={24} /> */}
      </IconAdornment>
    </Box>
  )
}
