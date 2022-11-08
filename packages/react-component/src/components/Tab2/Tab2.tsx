import { useTheme } from '@emotion/react'

import { Divider } from 'src/components'
import { Box, ButtonBase } from 'src/elements'

interface Tab2Props<T> {
  value: T
  variant?: 'hat' | 'rect'
  onChange: (value: T) => void
}

export const Tab2 = <T extends object>({ value, variant = 'hat', onChange }: Tab2Props<T>) => {
  //
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        position: 'relative',
        backgroundColor: theme.colors.white.main,
        borderBottom: `1px solid ${theme.colors.gray.darker}`,
      }}
    >
      <ButtonBase
        css={{
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
          height: 40,
          '&:active': {
            transform: 'none',
          },
        }}
      >
        dkdkdk
      </ButtonBase>

      <Divider orientation="vertical" />

      <ButtonBase>dkdkdk</ButtonBase>
    </Box>
  )
}
