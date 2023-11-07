import { HTMLAttributes, ReactNode } from 'react'
import { Link, To } from 'react-router-dom'

import { useTheme } from '@emotion/react'

import { FOLDING_NAVBAR_TRANSITION, useFoldingNavBarContext } from 'src/components'
import { Box } from 'src/elements'

interface HeaderLeftSectionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default "/"
   * 로고 클릭 시 이동할 라우팅 주소
   */
  to?: To
  /**
   * @default false
   * @description
   */
  disablePadding?: boolean
  /**
   * @description
   * 로고 아이콘
   */
  logo: ReactNode
}

export const HeaderLeftSection = ({
  to = '/',
  disablePadding = false,
  logo,
  ...rest
}: HeaderLeftSectionProps) => {
  const theme = useTheme()

  const { isNavBarFolded } = useFoldingNavBarContext()

  return (
    <Box
      css={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: theme.layoutSize.navBarWidth,
          transition: FOLDING_NAVBAR_TRANSITION,
        },
        !disablePadding && {
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
        },
        isNavBarFolded && {
          width: theme.layoutSize.foldedNavBarWidth,
          justifyContent: 'center',
        },
      ]}
      {...rest}
    >
      <Link to={to} css={{ display: 'flex' }}>
        {logo}
      </Link>
    </Box>
  )
}
