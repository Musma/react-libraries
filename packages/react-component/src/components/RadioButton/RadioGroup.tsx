import { ForwardedRef } from 'react'

import { useTheme } from '@emotion/react'

import { RadioButton, InputLabel } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

import { RadioOption } from './types'

interface RadioGroupProps<T> {
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
  value: T
  /**
   * @required
   */
  options: RadioOption<T>[]
  gap?: Size | number
  /**
   * @required
   * onChange 이벤트입니다.
   */
  className?: string
  onChange: (value: T) => void
}

/**
 *
 * 라디오 그룹입니다.
 *
 * @example
 * <RadioGroup value="test" onChange={onChange} data={[...]} />
 */
export const RadioGroup = <T extends string | boolean>(
  {
    size = 'md',
    required,
    label,
    value,
    gap = 'lg',
    options,
    className,
    onChange,
  }: RadioGroupProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
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
        {options.map(({ label, value: _value }) => (
          <RadioButton
            key={label}
            ref={ref}
            label={label}
            value={_value}
            checked={_value === value}
            onChange={onChange}
          />
        ))}
      </Box>
    </Box>
  )
}
