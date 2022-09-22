import { useState, useCallback } from 'react'

import { css, cx } from '@emotion/css'

import { TextInputProps } from 'src/components'
import { Size } from 'src/styles'

import { ReactComponent as LargeOpenEyeIcon } from './images/eye_closed_large.svg'
import { ReactComponent as OpenSmallEyeIconIcon } from './images/eye_closed_small.svg'
import { ReactComponent as ClosedLargeEyeIcon } from './images/eye_opened_large.svg'
import { ReactComponent as ClosedSmallEyeIconIcon } from './images/eye_opened_small.svg'
import { ReactComponent as LargeSearchIcon } from './images/search_large.svg'
import { ReactComponent as SmallSearchIcon } from './images/search_small.svg'

interface InputProps extends Omit<TextInputProps, 'label' | 'helperText' | 'size'> {
  size: Size
  type: 'text' | 'password' | 'search'
  className?: string
}

export const InputFactory = ({ type, size, className, ...rest }: InputProps) => {
  switch (type) {
    case 'text':
      return <TextTypeInput size={size} type="text" className={className} {...rest} />
    case 'password':
      return <PasswordInput size={size} type="password" className={className} {...rest} />
    case 'search':
      return <SearchInput size={size} type="text" className={className} {...rest} />
  }
}

const TextTypeInput = ({ type, size, className, ...rest }: InputProps) => {
  return (
    <input
      type={type}
      className={cx(inputCss.base, inputCss.size[size], inputCss.types.text, className)}
      {...rest}
    />
  )
}

const PasswordInput = ({ type, size, className, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  return (
    <div className={inputContainerCss}>
      <input
        type={showPassword ? 'text' : 'password'}
        className={cx(inputCss.base, inputCss.size[size], inputCss.types.password, className)}
        {...rest}
      />
      <span
        className={cx(iconContainerCss.base, iconContainerCss.position[size])}
        onClick={toggleShowPassword}
      >
        {showPassword && (size === 'lg' ? <LargeOpenEyeIcon /> : <OpenSmallEyeIconIcon />)}
        {!showPassword && (size === 'lg' ? <ClosedLargeEyeIcon /> : <ClosedSmallEyeIconIcon />)}
      </span>
    </div>
  )
}

const SearchInput = ({ handleSearchClick, size, className, ...rest }: InputProps) => {
  return (
    <div className={inputContainerCss}>
      <input
        className={cx(inputCss.base, inputCss.size[size], inputCss.types.search, className)}
        {...rest}
      />
      <span
        className={cx(iconContainerCss.base, iconContainerCss.position[size])}
        onClick={handleSearchClick}
      >
        {size === 'lg' ? <LargeSearchIcon /> : <SmallSearchIcon />}
      </span>
    </div>
  )
}

const inputContainerCss = css({ position: 'relative', display: 'flex', alignItems: 'center' })
const iconContainerCss = {
  base: css({
    position: 'absolute',
    right: '8px',
    cursor: 'pointer',
  }),
  position: {
    lg: css({ top: '8px' }),
    md: css({ top: '7px' }),
    sm: css({ top: '5px' }),
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
