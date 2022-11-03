import { forwardRef, HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { ReactPortal } from 'src/components'
import { Box } from 'src/elements'

type BackdropProps = HTMLAttributes<HTMLDivElement>

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const theme = useTheme()

  return (
    <ReactPortal>
      <Box
        ref={ref}
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
          backgroundColor: theme.dimmed.md,
        }}
        {...props}
      />
    </ReactPortal>
  )
})

Backdrop.displayName = 'Backdrop'
