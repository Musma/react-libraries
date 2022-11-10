import { Fragment, HTMLAttributes } from 'react'

import { Box } from 'src/elements'

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  show?: boolean
}

export const Collapse = ({ show, ...rest }: CollapseProps) => {
  if (show) {
    return <Box {...rest} />
  }
  return <Fragment />
}
