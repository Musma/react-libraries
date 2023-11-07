import { Fragment, HTMLAttributes, SVGProps } from 'react'

import { useTheme } from '@emotion/react'
import { ArrowTopMediumIcon } from '@musma/react-icons'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography } from 'src/components'
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
   *
   */
  active?: boolean
  isFolding?: boolean
  isChildrenActive?: boolean
}

export const NavBarList = ({
  label,
  icon: Icon,
  active = false,
  isFolding = false,
  isChildrenActive = false,
  ...rest
}: NavBarListProps) => {
  const theme = useTheme()

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
          isFolding && {
            justifyContent: 'center',
          },
          isFolding &&
            isChildrenActive && {
              backgroundColor: convertHexToRGB(theme.colors.primary.main, 0.1),
              color: theme.colors.primary.main,
            },
        ]}
      >
        <Icon color="currentColor" width={16} height={16} css={{ marginRight: theme.spacing.md }} />

        {!isFolding && (
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
