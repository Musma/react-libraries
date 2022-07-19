import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface ImageLinkProps extends ImageProps {
  href: string
}

export const ImageLink = ({ href, ...rest }: ImageLinkProps) => {
  return (
    <Link href={href}>
      <a>
        <Image {...rest} />
      </a>
    </Link>
  )
}
