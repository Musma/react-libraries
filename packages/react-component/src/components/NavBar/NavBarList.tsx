import { Fragment, HTMLAttributes, SVGProps } from 'react'

import { useTheme } from '@emotion/react'
import { ArrowTopMediumIcon } from '@musma/react-icons'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography, useFolderNavBarContext } from 'src/components'
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
   * @optional
   * @default false
   * 서브 메뉴가 열려있는지 여부
   */
  active?: boolean
  /**
   * @optional
   * @default false
   * 서브 메뉴의 pathname이 isActive 상태인지 여부
   * true 이면 폴딩 상태일 때 선택된 버튼 CSS로 변경됩니다.
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

  const { isNavFold } = useFolderNavBarContext()

  return (
    <Box css={{ margin: '8px 0px' }} {...rest}>
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            height: 40,
            minWidth: 'fit-content',
            cursor: 'pointer',
            backgroundColor: theme.colors.transparent,
            borderRadius: theme.rounded.lg,
            paddingLeft: theme.spacing.sm,
            paddingRight: theme.spacing.sm,
            color: theme.colors.black.dark,
          },
          isNavFold && {
            justifyContent: 'center',
          },
          isNavFold &&
            isChildrenActive && {
              backgroundColor: convertHexToRGB(theme.colors.primary.main, 0.1),
              color: theme.colors.primary.main,
            },
        ]}
      >
        <Icon color="currentColor" width={16} height={16} css={{ marginRight: theme.spacing.md }} />

        {!isNavFold && (
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
