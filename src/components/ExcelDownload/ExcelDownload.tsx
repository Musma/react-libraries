import classNames from 'classnames'
import { ButtonHTMLAttributes, useMemo } from 'react'

import XlsIcon from './images/xls.svg'
import XlsDisabledIcon from './images/xls_disabled.svg'
import XlsOutlinedIcon from './images/xls_outlined.svg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'contained'
  disabled?: boolean
}

export const ExcelDownload = ({ variant, disabled = false, ...rest }: Props) => {
  const variantStyle = useMemo(() => {
    const styles = {
      outlined: 'border border-[#107C41] bg-white',
      contained: 'bg-[#107C41]',
    }
    if (!variant) {
      return styles['contained']
    }
    return styles[variant]
  }, [variant])

  const icon = useMemo(() => {
    if (disabled) return XlsDisabledIcon
    if (variant === 'contained') return XlsOutlinedIcon
    return XlsIcon
  }, [variant, disabled])
  return (
    <button
      {...rest}
      className={classNames(
        'h-8 w-8 cursor-pointer rounded-md p-2',
        { [variantStyle]: !disabled },
        { 'bg-[#F9FAFB]': disabled },
      )}
    >
      {<img src={icon} alt="xls" />}
    </button>
  )
}
