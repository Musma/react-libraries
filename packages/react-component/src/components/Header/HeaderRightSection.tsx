import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface HeaderRightSectionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
   * @description
   * 패딩 여부
   *
   */
  disablePadding?: boolean
}

export const HeaderRightSection = ({
  disablePadding = false,
  ...rest
}: HeaderRightSectionProps) => {
  const theme = useTheme()
  return (
    <Box
      css={[
        { display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between' },
        !disablePadding && {
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
        },
      ]}
      {...rest}
    />
  )
}
