import { MouseEvent, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { SelectOption, Typography } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface OptionProps<T> {
  size?: Size
  option: SelectOption<T>
  selectedOption?: SelectOption<T>
  active?: boolean
  onMouseEnter: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  onMouseLeave: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  onClick: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const Option = <T extends unknown>({
  size = 'md',
  option,
  selectedOption,
  active,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: OptionProps<T>) => {
  const theme = useTheme()

  // 선택한 아이템인지 판단
  const isSelected = useMemo(() => {
    return selectedOption?.value === option.value
  }, [option.value, selectedOption?.value])

  return (
    <Box
      tabIndex={-1}
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
        active && {
          backgroundColor: theme.colors.white.lighter,
          color: theme.colors.blue.main,
        },
        isSelected && {
          backgroundColor: theme.colors.blue.main,
          color: theme.colors.white.main,
        },
      ]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onKeyDown={(e) => {
        e.currentTarget.blur()
      }}
    >
      <Typography type={size === 'lg' ? 'body3' : 'caption1'}>{option.label}</Typography>
    </Box>
  )
}
