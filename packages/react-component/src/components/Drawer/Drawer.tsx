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
            top: 0,
            right: 0,
            width: width,
            height: '100%',
            position: 'fixed',
            backgroundColor: theme.colors.white.main,
            overflowY: 'auto',
            borderTopLeftRadius: theme.rounded.lg,
            borderBottomLeftRadius: theme.rounded.lg,
            display: 'flex',
            flexDirection: 'column',
            boxShadow:
              'rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px',
          }}
          {...rest}
        />
      </Backdrop>
    )
  }
  return <Fragment />
}
