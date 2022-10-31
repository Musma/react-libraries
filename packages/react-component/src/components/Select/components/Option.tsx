import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Box, SelectOption, Typography } from 'src/components'
import { Size } from 'src/types'

interface OptionProps<T> {
  size?: Size
  option: SelectOption<T>
  selectedOption?: SelectOption<T>
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const Option = <T extends unknown>({
  size = 'md',
  option,
  selectedOption,
}: OptionProps<T>) => {
  const theme = useTheme()

  // 선택한 아이템인지 판단
  const isSelected = useMemo(() => {
    return selectedOption?.value === option.value
  }, [option.value, selectedOption?.value])

  return (
    <Box
      css={[
        {
          display: 'flex',
          alignItems: 'center',
          height: size === 'sm' ? 24 : 28,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: theme.spacing.sm,
          cursor: 'pointer',
        },
        isSelected && {
          backgroundColor: theme.colors.blue.main,
          color: theme.colors.white.main,
        },
        !isSelected && {
          '&:hover': {
            backgroundColor: theme.colors.blue.lighter,
            color: theme.colors.blue.main,
          },
        },
      ]}
      tabIndex={-1}
    >
      <Typography type={size === 'lg' ? 'body3' : 'caption1'} css={{ color: 'currentcolor' }}>
        {option.label}
      </Typography>
    </Box>
  )
}
