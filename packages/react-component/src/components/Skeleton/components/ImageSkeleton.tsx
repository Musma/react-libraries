import { useTheme } from '@emotion/react'
import { OutlinePhotoIcon } from '@musma/react-icons'

import { Box } from 'src/elements'

import { pulse } from './Keyframes'
import { SkeletonProps } from '../types'

export const ImageSkeleton = ({ ...rest }: SkeletonProps) => {
  const theme = useTheme()

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.rounded.md,
        backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
        animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
      }}
      {...rest}
    >
      <OutlinePhotoIcon
        width="50%"
        height="50%"
        color={theme.colors.white.main}
        css={{ 'svg path': { opacity: 0.5, mixBlendMode: 'lighten' } }}
      />
    </Box>
  )
}
