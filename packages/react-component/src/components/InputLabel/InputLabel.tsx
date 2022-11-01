import { LabelHTMLAttributes } from 'react'

import { Typography } from 'src/components'
import { Label } from 'src/elements'
import { Size } from 'src/types'

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: Size
}

export const InputLabel = ({ size = 'md', children, ...rest }: InputLabelProps) => {
  return (
    <Label {...rest}>
      <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{children}</Typography>
    </Label>
  )
}
