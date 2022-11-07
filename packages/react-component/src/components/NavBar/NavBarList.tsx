import { HTMLAttributes, SVGProps } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineArrowTopMediumIcon } from '@musma/react-icons'

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
}

export const NavBarList = ({ label, icon: Icon, active = false, ...rest }: NavBarListProps) => {
  const theme = useTheme()
  return (
    <Box css={{ margin: '8px 0px' }} {...rest}>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          height: 40,
          cursor: 'pointer',
          backgroundColor: theme.colors.transparent,
          borderRadius: theme.rounded.lg,
          paddingLeft: theme.spacing.sm,
          paddingRight: theme.spacing.sm,
          color: theme.colors.black.dark,
        }}
      >
        <Icon color="currentColor" width={16} height={16} css={{ marginRight: theme.spacing.md }} />

        <Typography type={'body2'} css={{ color: 'currentcolor' }}>
          {label}
        </Typography>

        <OutlineArrowTopMediumIcon
          color="currentColor"
          css={{
            marginLeft: 'auto',
            transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all 0.2s ease',
          }}
        />
      </Box>
    </Box>
  )
}
