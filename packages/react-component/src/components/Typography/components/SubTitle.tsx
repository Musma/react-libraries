import { PropsWithChildren } from 'react'

export type SubTitleType = 'subTitle1' | 'subTitle2' | 'subTitle3'

export type SubTitleProps = {
  type?: 'subTitle'
  variant?: SubTitleType
  className?: string
}

export const SubTitle = ({
  variant = 'subTitle1',
  children,
  className,
}: PropsWithChildren<SubTitleProps>) => {
  return (
    <p
      css={[
        {
          margin: 0,
          lineHeight: 1,
        },
        {
          subTitle1: {
            fontSize: '1.25rem',
            fontWeight: 400,
            letterSpacing: -0.2,
          },
          subTitle2: {
            fontSize: '0.875rem',
            fontWeight: 600,
          },
          subTitle3: {
            fontSize: '0.75rem',
            fontWeight: 600,
          },
        }[variant],
      ]}
      className={className}
    >
      {children}
    </p>
  )
}
