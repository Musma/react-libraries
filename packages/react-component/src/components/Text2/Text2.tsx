import { HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'small' | 'medium' | 'large'
}

export const Text2 = ({ size, ...rest }: TextProps) => {
  return <p css={{ margin: 0, fontSize: 20, color: '#dd9c4f', padding: 0 }} {...rest} />
}
