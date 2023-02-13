import { forwardRef } from 'react'

import { useTheme } from '@emotion/react'

import { RadioButton, InputLabel } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface RadioGroupProps {
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
  value: string
  /**
   * @required
   */
  items: {
    label: string
    value: string
  }[]
  gap?: Size | number
  /**
   * @required
   * onChange 이벤트입니다.
   */
  className?: string
  onChange: (value: string) => void
}

/**
 *
 * 라디오 그룹입니다.
 *
 * @example
 * <RadioGroup value="test" onChange={onChange} data={[...]} />
 */
export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ size = 'md', required, label, value, gap = 'lg', items, className, onChange }, ref) => {
    const theme = useTheme()
    return (
      <Box className={className}>
        {/* 라벨 */}
        {label && (
          <InputLabel required={required} size={size}>
            {label}
          </InputLabel>
        )}

        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            height: theme.inputSize.height[size],
            gap: theme.spacingUtil(gap),
          }}
        >
          {items.map(({ label, value: _value }) => (
            <RadioButton
              key={label}
              ref={ref}
              value={_value}
              label={label}
              checked={_value === value}
              onChange={onChange}
            />
          ))}
        </Box>
      </Box>
    )
  },
)

RadioGroup.displayName = 'RadioGroup'
