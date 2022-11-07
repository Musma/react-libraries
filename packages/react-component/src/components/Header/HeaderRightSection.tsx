import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface HeaderRightSectionProps extends HTMLAttributes<HTMLDivElement> {
  disablePadding?: boolean
}

export const HeaderRightSection = ({ disablePadding, ...rest }: HeaderRightSectionProps) => {
  const theme = useTheme()
  return (
    <Box
      css={[
        { display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between' },
        disablePadding && {
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
        },
      ]}
      {...rest}
    />
  )
}
