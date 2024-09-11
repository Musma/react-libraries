import { forwardRef, HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { ReactPortal } from 'src/components'
import { Box } from 'src/elements'

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
   *
   * @description
   * 뒷 배경 어둡게 하는 것을 사용하지 않을지 여부
   */
  disableDimmed?: boolean
  /**
   * @default flase
   * Backdrop 렌더링 시 body 태그의 overflow: 'hidden'을 비활성화 시킴
   */
  disableOverflowHidden?: boolean
}

/**
 * Backdrop
 * @description
 * Modal, Drawer 등이 나타날 때 뒤에 깔리는 어두운 배경 화면입니다.
 */
export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ disableDimmed, disableOverflowHidden = false, ...rest }, ref) => {
    const theme = useTheme()

    return (
      <ReactPortal disableOverflowHidden={disableOverflowHidden}>
        <Box
          ref={ref}
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
            backgroundColor: disableDimmed ? theme.colors.transparent : theme.dimmed.md,
          }}
          {...rest}
        />
      </ReactPortal>
    )
  },
)

Backdrop.displayName = 'Backdrop'
