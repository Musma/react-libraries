import classNames from 'classnames'
import React from 'react'

import XlsIcon from './images/xls.svg'
import XlsDisabledIcon from './images/xls_disabled.svg'
import XlsOutlinedIcon from './images/xls_outlined.svg'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'contained'
  disabled?: boolean
}

export const ExcelDownload = ({ variant, disabled = false, ...rest }: Props) => {
  const getStyle = React.useCallback(() => {
    if (disabled) return 'bg-[#F9FAFB]'
    if (variant === 'contained') return 'bg-[#107C41]'
    return 'border border-[#107C41] bg-white'
  }, [variant, disabled])

  const getIcon = React.useCallback(() => {
    if (disabled) return XlsDisabledIcon
    if (variant === 'contained') return XlsOutlinedIcon
    return XlsIcon
  }, [variant, disabled])
  return (
    <button {...rest} className={classNames('h-8 w-8 cursor-pointer rounded-md p-2', getStyle())}>
      {<img src={getIcon()} alt="xls" />}
    </button>
  )
}
