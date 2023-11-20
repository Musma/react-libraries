import { Fragment, HTMLAttributes, SVGProps, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { ArrowTopMediumIcon } from '@musma/react-icons'

import { Typography, useFoldingNavBarContext } from 'src/components'
import { Box } from 'src/elements'

interface NavBarListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   *
   */
  label: string
  /**
   *
   */
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  /**
   * 서브 메뉴가 열려있는지 여부
   * @optional
   * @default false
   */
  active?: boolean
  /**
   * 서브 메뉴의 pathname이 isActive 상태인지 여부. (true 이면 폴딩 상태일 때 선택된 버튼 CSS로 변경됨)
   * @optional
   * @default false
   */
  isChildrenActive?: boolean
}

export const NavBarList = ({
  label,
  icon: Icon,
  active = false,
  isChildrenActive = false,
  ...rest
}: NavBarListProps) => {
  const theme = useTheme()

  const { isNavBarFolded } = useFoldingNavBarContext()
  const isActiveStyle = useMemo(
    () => isNavBarFolded && isChildrenActive,
    [isNavBarFolded, isChildrenActive],
  )

  return (
    <Box css={{ margin: '8px 0px' }} className={isActiveStyle ? 'active' : undefined} {...rest}>
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            height: 40,
            minWidth: 'fit-content',
            cursor: 'pointer',
            backgroundColor: isActiveStyle ? theme.colors.gray.lighter : theme.colors.transparent,
            color: theme.colors.black.main,
            borderRadius: theme.rounded.lg,
            paddingLeft: theme.spacing.sm,
            paddingRight: theme.spacing.sm,
          },
          isNavBarFolded && {
            justifyContent: 'center',
          },
          isActiveStyle && {
            backgroundColor: theme.colors.gray.lighter,
            color: theme.colors.black.main,
          },
        ]}
      >
        <Icon color="currentColor" width={16} height={16} css={{ marginRight: theme.spacing.md }} />

        {!isNavBarFolded && (
          <Fragment>
            <Typography type={'body2'} css={{ color: 'currentcolor' }}>
              {label}
            </Typography>

            <ArrowTopMediumIcon
              color="currentColor"
              css={{
                marginLeft: 'auto',
                transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'all 0.2s ease',
              }}
            />
          </Fragment>
        )}
      </Box>
    </Box>
  )
}
