import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
  backgroundColor?: string
}

export const Header = ({ zIndex, backgroundColor, ...rest }: HeaderProps) => {
  const theme = useTheme()
  return (
    <header
      css={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: theme.layoutSize.headerHeight,
        backgroundColor: backgroundColor || theme.colors.white.main,
        boxShadow: theme.shadow.md,
        zIndex: zIndex ?? theme.zIndex.header,
      }}
      {...rest}
    />
  )
}
