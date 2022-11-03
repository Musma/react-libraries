import { forwardRef, InputHTMLAttributes, useMemo } from 'react'

import { uniqueId } from 'lodash-es'

import { Typography } from 'src/components'
import { InputBase, Label } from 'src/elements'
import { Size } from 'src/types'

import { ReactComponent as LgCheckedIcon } from './images/checked_lg.svg'
import { ReactComponent as MdCheckedIcon } from './images/checked_md.svg'
import { ReactComponent as SmCheckedIcon } from './images/checked_sm.svg'
import { ReactComponent as LgDefaultIcon } from './images/default_lg.svg'
import { ReactComponent as MdDefaultIcon } from './images/default_md.svg'
import { ReactComponent as SmDefaultIcon } from './images/default_sm.svg'
import { ReactComponent as LgDisabledIcon } from './images/disabled_lg.svg'
import { ReactComponent as MdDisabledIcon } from './images/disabled_md.svg'
import { ReactComponent as SmDisabledIcon } from './images/disabled_sm.svg'

// TODO: RadioGroup을 따로 만들 예쩡

interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
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
  onChange: (value: string) => void
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    { id: _id, label, size = 'md', checked, disabled = false, className, onChange, ...rest },
    ref,
  ) => {
    const id = useMemo(() => {
      return _id || uniqueId()
    }, [_id])

    const radio = useMemo(() => {
      if (disabled) {
        return {
          sm: <SmDisabledIcon css={{ cursor: 'not-allowed' }} />,
          md: <MdDisabledIcon css={{ cursor: 'not-allowed' }} />,
          lg: <LgDisabledIcon css={{ cursor: 'not-allowed' }} />,
        }[size]
      }

      if (checked) {
        return {
          sm: <SmCheckedIcon />,
          md: <MdCheckedIcon />,
          lg: <LgCheckedIcon />,
        }[size]
      }

      return {
        sm: <SmDefaultIcon />,
        md: <MdDefaultIcon />,
        lg: <LgDefaultIcon />,
      }[size]
    }, [size, disabled, checked])

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
          onChange={(e) => {
            onChange(e.target.value)
          }}
          {...rest}
        />

        {radio}

        <Typography
          type={size === 'sm' ? 'caption1' : size === 'md' ? 'body3' : 'body2'}
          css={{ marginLeft: size === 'lg' ? 8 : 4 }}
        >
          {label}
        </Typography>
      </Label>
    )
  },
)

RadioButton.displayName = 'RadioButton'
