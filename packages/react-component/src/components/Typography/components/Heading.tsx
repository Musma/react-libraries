import { PropsWithChildren } from 'react'

import { HeadingProps } from 'src/components/Typography/types'

export const Heading = ({
  variant = 'h1',
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  switch (variant) {
    case 'h1':
      return (
        <h1
          css={{
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: '56px',
            letterSpacing: '-0.6px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          css={{
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '48px',
            letterSpacing: '-0.6px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          css={{
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '-0.6px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          css={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '30px',
            letterSpacing: '-0.2px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          css={{
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '24px',
            letterSpacing: '-0.2px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          css={{
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            letterSpacing: '-0.2px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h6>
      )
    default:
      return (
        <h1
          css={{
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: '56px',
            letterSpacing: '-0.6px',
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h1>
      )
  }
}
