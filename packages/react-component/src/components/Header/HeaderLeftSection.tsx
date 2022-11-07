import { SVGProps } from 'react'
import { Link, To } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { OutlineMenuIcon } from '@musma/react-icons'

import { IconAdornment } from 'src/components'
import { Box } from 'src/elements'

interface HeaderLeftSectionProps {
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
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element
  /**
   * @optional
   * @description
   * 메뉴 클릭시 이벤트
   * Props를 전달하지 않으면 Menu Icon이 나타나지 않음
   */
  onMenuClick?: () => void
}

export const HeaderLeftSection = ({
  to = '/',
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
          alignItems: 'center',
          justifyContent: 'space-between',
          width: theme.layoutSize.navBarWidth,
        },
        !disablePadding && {
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
        },
      ]}
    >
      <Link to={to} css={{ display: 'flex' }}>
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
