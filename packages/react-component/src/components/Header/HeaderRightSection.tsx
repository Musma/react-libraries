import { HTMLAttributes } from 'react'

import { Box } from 'src/components'

type HeaderRightSectionProps = HTMLAttributes<HTMLDivElement>

export const HeaderRightSection = (props: HeaderRightSectionProps) => {
  return (
    <Box
      css={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
      {...props}
    />
  )
}
