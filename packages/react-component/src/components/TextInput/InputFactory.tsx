import { useState, useCallback } from 'react'

import { css } from '@emotion/react'

import { TextInputProps, IconAdornment } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as LargeOpenEyeIcon } from './images/eye_closed_large.svg'
import { ReactComponent as OpenSmallEyeIconIcon } from './images/eye_closed_small.svg'
import { ReactComponent as ClosedLargeEyeIcon } from './images/eye_opened_large.svg'
import { ReactComponent as ClosedSmallEyeIconIcon } from './images/eye_opened_small.svg'

interface InputProps extends Omit<TextInputProps, 'label' | 'helperText' | 'size'> {
  size: Size
  type: 'text' | 'password'
}

export const InputFactory = ({ type, size, ...rest }: InputProps) => {
  if (type === 'text') {
    return <TextTypeInput size={size} type="text" {...rest} />
  }

  return <PasswordInput size={size} type="password" {...rest} />
}

const TextTypeInput = ({ type, size, ...rest }: InputProps) => {
  return (
    <input type={type} css={[inputCss.base, inputCss.size[size], inputCss.types.text]} {...rest} />
  )
}

const PasswordInput = ({ type, size, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(type === 'password')

  const toggleShowPassword = useCallback(() => {
    setShowPassword((value) => !value)
  }, [])

  return (
    <div css={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        css={[inputCss.base, inputCss.size[size], inputCss.types.password]}
        {...rest}
      />

      <IconAdornment
        onClick={toggleShowPassword}
        css={[iconContainerCss.base, iconContainerCss.position[size]]}
      >
        {showPassword && (size === 'lg' ? <LargeOpenEyeIcon /> : <OpenSmallEyeIconIcon />)}
        {!showPassword && (size === 'lg' ? <ClosedLargeEyeIcon /> : <ClosedSmallEyeIconIcon />)}
      </IconAdornment>
    </div>
  )
}

const iconContainerCss = {
  base: css({
    position: 'absolute',
    right: '8px',
    cursor: 'pointer',
  }),
  position: {
    lg: css({ top: '4px' }),
    md: css({ top: '5px' }),
    sm: css({ top: '6px' }),
  },
}
const inputCss = {
  base: css({
    boxSizing: 'border-box',
    borderRadius: '4px',
    paddingLeft: '8px',
    fontWeight: 400,
    outline: 'none',
  }),
  types: {
    text: css({ paddingRight: '8px' }),
    password: css({ paddingRight: '28px' }),
    search: css({ paddingRight: '28px' }),
  },
  size: {
    sm: css({ height: '24px', width: '148px', fontSize: '12px', lineHeight: '16px' }),
    md: css({ height: '28px', width: '180px', fontSize: '12px', lineHeight: '16px' }),
    lg: css({ height: '32px', width: '200px', fontSize: '14px', lineHeight: '20px' }),
  },
}
