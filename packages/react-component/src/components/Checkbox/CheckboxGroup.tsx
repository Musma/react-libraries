import { forwardRef } from 'react'

import { useTheme } from '@emotion/react'

import { InputLabel, Checkbox } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface CheckboxGroupProps {
  /**
   * @optional
   */
  size?: Size
  /**
   * @optional
   */
  required?: boolean
  /**
   * @optional
   */
  label?: string
  /**
   * @required
   *
   */
  value: string[]
  /**
   * @required
   */
  options: {
    label: string
    value: string
  }[]
  gap?: Size | number
  /**
   * @optional
   * 최상단 div에 전달할 커스텀 스타일입니다.
   */
  className?: string
  /**
   * @required
   * onChange 이벤트입니다.
   */
  onChange: (value: string[]) => void
}

/**
 *
 * 체크박스 그룹입니다.
 *
 * @example
 * <CheckboxGroup value="test" onChange={onChange} data={[...]} />
 */
export const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ size = 'md', required, label, value, gap = 'lg', options, className, onChange }, ref) => {
    const theme = useTheme()
    return (
      <Box className={className}>
        {/* 라벨 */}
        {label && (
          <InputLabel required={required} size={size}>
            {label}
          </InputLabel>
        )}

        {/* Checkbox Container */}
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            height: theme.inputSize.height[size],
            gap: theme.spacingUtil(gap),
          }}
        >
          {options.map(({ label, value: _value }) => (
            <Checkbox
              key={label}
              ref={ref}
              value={_value}
              label={label}
              checked={Boolean(value.find((item) => item === _value))}
              onChange={(checked) => {
                if (checked) {
                  onChange([...value, _value])
                } else {
                  const items = value.filter((a) => a !== _value)
                  onChange([...items])
                }
              }}
            />
          ))}
        </Box>
      </Box>
    )
  },
)

CheckboxGroup.displayName = 'RadioGroup'
