import { Fragment, SVGProps } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography, useFoldingNavBarContext } from 'src/components'
import { Box } from 'src/elements'

interface NavBarListItemProps extends NavLinkProps {
  label: string
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export const NavBarLink = ({ label, icon: Icon, ...rest }: NavBarListItemProps) => {
  const theme = useTheme()

  const { isNavBarFolded } = useFoldingNavBarContext()

  return (
    <NavLink css={{ textDecoration: 'none', margin: '8px 0px', display: 'block' }} {...rest}>
      {({ isActive }) => (
        <Box
          css={[
            {
              display: 'flex',
              alignItems: 'center',
              height: 40,
              minWidth: 'fit-content',
              borderRadius: theme.rounded.lg,
              backgroundColor: isActive
                ? convertHexToRGB(theme.colors.primary.main, 0.1)
                : theme.colors.transparent,
              paddingLeft: Icon ? theme.spacing.sm : 40,
              paddingRight: theme.spacing.sm,
              color: isActive ? theme.colors.primary.main : theme.colors.black.dark,
              '&:hover': {
                backgroundColor: convertHexToRGB(theme.colors.primary.main, 0.1),
                color: theme.colors.primary.main,
              },
            },
            isNavBarFolded && {
              justifyContent: 'center',
              textWrap: 'nowrap',
            },
          ]}
        >
          {/* 아이콘이 있을 경우 */}
          {Icon ? (
            <Fragment>
              <Icon
                color="currentColor"
                width={16}
                height={16}
                css={{ marginRight: theme.spacing.md }}
              />

              <Typography
                type={'body2'}
                css={[
                  { color: 'currentcolor' },
                  isNavBarFolded && {
                    display: 'none',
                  },
                ]}
              >
                {label}
              </Typography>
            </Fragment>
          ) : (
            // 아이콘이 없을 경우
            <Typography
              type={isActive ? 'subTitle2' : 'body3'}
              css={[
                {
                  color: 'currentcolor',
                  whiteSpace: 'nowrap',
                },
                isNavBarFolded && {
                  display: 'none',
                },
              ]}
            >
              {label}
            </Typography>
          )}
        </Box>
      )}
    </NavLink>
  )
}
