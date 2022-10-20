import { Fragment, HTMLAttributes } from 'react'

import { Backdrop, Box } from 'src/components'

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  // direction?: 'top' | 'right' | 'bottom' | 'left'
}

export const Drawer = ({ open, ...rest }: DrawerProps) => {
  if (open) {
    return (
      <Backdrop open={open}>
        <Box
          css={{
            top: 0,
            right: 0,
            width: 400,
            height: '100%',
            position: 'fixed',
            backgroundColor: 'white',
            overflowY: 'auto',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
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
