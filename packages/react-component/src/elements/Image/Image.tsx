import { ImgHTMLAttributes } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export const Image = (props: ImageProps) => {
  return <img {...props} />
}
