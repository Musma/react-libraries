import { Fragment, HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Backdrop, Box } from 'src/components'

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  width?: number
}

export const Drawer = ({ open, width = 400, ...rest }: DrawerProps) => {
  const theme = useTheme()
  if (open) {
    return (
      <Backdrop open={open}>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            top: 0,
            right: 0,
            width: width,
            height: '100%',
            overflowY: 'auto',
            backgroundColor: theme.colors.white.main,
            borderTopLeftRadius: theme.rounded.lg,
            borderBottomLeftRadius: theme.rounded.lg,
            boxShadow: theme.shadow.md,
          }}
          {...rest}
        />
      </Backdrop>
    )
  }
  return <Fragment />
}
