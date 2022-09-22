import { Fragment, HTMLAttributes } from 'react'

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
}

export const Backdrop = ({ open, ...rest }: BackdropProps) => {
  if (!open) {
    return <Fragment />
  }

  return (
    <div
      aria-hidden={true}
      css={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        inset: 0,
        zIndex: 1000,
      }}
      {...rest}
    />
  )
}
