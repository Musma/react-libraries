import { Fragment, HTMLAttributes } from 'react'

import { ReactPortal } from '../ReactPortal'

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
}

export const Backdrop = ({ open, ...rest }: BackdropProps) => {
  if (open) {
    return (
      <ReactPortal>
        <div
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
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
          {...rest}
        />
      </ReactPortal>
    )
  }

  return <Fragment />
}
