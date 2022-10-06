import { HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'small' | 'medium' | 'large'
}

export const Text2 = ({ size, className, ...rest }: TextProps) => {
  console.log(className)
  return (
    <p
      css={{ margin: 0, fontSize: 20, color: '#dd9c4f', padding: 0 }}
      className={className}
      {...rest}
    />
  )
}
