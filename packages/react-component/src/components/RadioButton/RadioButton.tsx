import { ForwardedRef, forwardRef, InputHTMLAttributes, useMemo } from 'react'

import { uniqueId } from '@musma/react-utils'

import { Typography } from 'src/components'
import { InputBase, Label } from 'src/elements'
import { Size } from 'src/types'

import { Radio } from './components'

// TODO: RadioGroup을 따로 만들 예쩡

interface RadioButtonProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'size' | 'onChange'> {
  /**
   *
   */
  label?: string
  /**
   * @default
   * sm:
   * md:
   * lg:
   */
  size?: Size
  /**
   * (required)
   *
   */
  value: T
  /**
   * (required)
   *
   */
  onChange: (value: T) => void
}

const _RadioButton = <T extends string>(
  {
    id: _id,
    label,
    size = 'md',
    checked,
    disabled = false,
    className,
    value,
    onChange,
    ...rest
  }: RadioButtonProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const id = useMemo(() => {
    return _id || uniqueId()
  }, [_id])

  return (
    <Label
      htmlFor={id}
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      className={className}
    >
      {/* InputBase */}
      {/* hidden={true} 로 렌더링되지 않음 */}
      <InputBase
        id={id}
        type="radio"
        ref={ref}
        checked={checked}
        readOnly={true}
        hidden={true}
        disabled={disabled}
        onChange={() => {
          onChange(value)
        }}
        {...rest}
      />

      <Radio size={size} checked={checked} disabled={disabled} />

      <Typography
        type={size === 'sm' ? 'caption1' : size === 'md' ? 'body3' : 'body2'}
        css={{ marginLeft: size === 'lg' ? 8 : 4 }}
      >
        {label}
      </Typography>
    </Label>
  )
}

export const RadioButton = forwardRef(_RadioButton) as <T>(
  props: RadioButtonProps<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof _RadioButton>
