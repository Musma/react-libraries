import { Fragment, ReactNode, SVGProps } from 'react'

import { useTheme } from '@emotion/react'

import { Span } from 'src/elements'
import { Size } from 'src/types'

interface AdornmentProps {
  adornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  size?: Size
  direction?: 'start' | 'end'
}

export const Adornment = ({ adornment, size = 'md', direction = 'start' }: AdornmentProps) => {
  const theme = useTheme()
  const adornmentType = typeof adornment

  if (adornmentType === 'function') {
    const IconAdornment = adornment as (props: SVGProps<SVGSVGElement>) => JSX.Element

    return (
      <IconAdornment
        {...theme.inputSize.iconSize[size]}
        color="currentColor"
        css={{
          marginRight: direction === 'start' ? theme.spacing.sm : 0,
          marginLeft: direction === 'end' ? theme.spacing.sm : 0,
        }}
      />
    )
  }

  if (adornmentType === 'object') {
    return (
      <Span
        css={{
          width: 'fit-content',
          height: 'fit-content',
          display: 'flex',
          marginRight: direction === 'start' ? theme.spacing.sm : 0,
          marginLeft: direction === 'end' ? theme.spacing.sm : 0,
        }}
      >
        {adornment as ReactNode}
      </Span>
    )
  }

  return <Fragment />
}
