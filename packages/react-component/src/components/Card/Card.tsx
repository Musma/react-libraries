import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/components'
import { Size } from 'src/types'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: Size
}

export const Card = ({ rounded = 'md', ...rest }: CardProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.gray.lighter,
        borderRadius: theme.rounded[rounded],
      }}
      {...rest}
    />
  )
}
