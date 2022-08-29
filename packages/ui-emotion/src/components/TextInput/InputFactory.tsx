import { css, cx } from '@emotion/css'
import { useState, useCallback } from 'react'
import { Size } from 'src/styles/theme'
import { TextInputProps } from './types'
import { ReactComponent as OpenEyeIcon } from './images/eye_closed.svg'
import { ReactComponent as ClosedEyeIcon } from './images/eye_opened.svg'
import { ReactComponent as OpenEyeIconMdSmIcon } from './images/eye_closed_md,sm.svg'
import { ReactComponent as ClosedEyeIconMdSmIcon } from './images/eye_opened_md,sm.svg'
import { ReactComponent as LgSearchIcon } from './images/search.svg'
import { ReactComponent as MdSearchIcon } from './images/search_md,sm.svg'

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
        {showPassword && (size === 'lg' ? <OpenEyeIcon /> : <OpenEyeIconMdSmIcon />)}
        {!showPassword && (size === 'lg' ? <ClosedEyeIcon /> : <ClosedEyeIconMdSmIcon />)}
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
        {size === 'lg' ? <LgSearchIcon /> : <MdSearchIcon />}
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
