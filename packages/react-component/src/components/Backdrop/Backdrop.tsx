import { Fragment, HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box, ReactPortal } from 'src/components'

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
}

export const Backdrop = ({ open, ...rest }: BackdropProps) => {
  const theme = useTheme()
  if (open) {
    return (
      <ReactPortal>
        <Box
          aria-hidden={true}
          tabIndex={-1}
          css={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            inset: 0,
            zIndex: theme.zIndex.navBar + 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
          {...rest}
        />
      </ReactPortal>
    )
  }

  return <Fragment />
}
