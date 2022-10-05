import { HTMLAttributes } from 'react'

import { cx, css } from '@emotion/css'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'small' | 'medium' | 'large'
}

export const Text = ({ size, className, ...rest }: TextProps) => {
  console.log(className)
  return (
    <p
      className={cx(css({ margin: 0, fontSize: 20, color: '#dd9c4f', padding: 0 }), className)}
      {...rest}
    />
  )
}
