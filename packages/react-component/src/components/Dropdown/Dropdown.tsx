import { Fragment, HTMLAttributes, useMemo, useRef } from 'react'

import { useTheme } from '@emotion/react'
import { useOutsideListener } from '@musma/react-utils'

import { Box } from 'src/elements'

import { Backdrop } from '../Backdrop'

interface DropdownProps extends HTMLAttributes<HTMLElement> {
  /**
   * @required
   *
   * @description
   * If true, the component is shown
   */
  show: boolean
  /**
   * @required
   *
   * @description
   * Dropdown 닫을 때 이벤트
   */
  onClose: () => void
  /**
   * @optional
   *
   * @description
   * ref를 전달받음
   * 전달받은 ref HTMLElement 요소의 아래에 Dropdown이 위치하게 됨
   *
   */
  anchorEl?: HTMLElement | null
  /**
   * @default
   * horizontal: 'left'
   * vertical: 'bottom'
   *
   * @description
   * horizontal: 수평 위치
   * vertical: 수직 위치
   */
  anchorOrigin?: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  }
}

/**
 *
 */
export const Dropdown = ({
  show,
  children,
  anchorEl,
  anchorOrigin = {
    horizontal: 'left',
    vertical: 'bottom',
  },
  onClose,
  ...rest
}: DropdownProps) => {
  const theme = useTheme()
  const ref = useRef<HTMLDivElement>(null)

  // Dropdown
  const top = useMemo(() => {
    if (anchorEl) {
      const { top, height } = anchorEl.getBoundingClientRect()
      return {
        bottom: top + height,
        center: top + height / 2,
        top: top,
      }[anchorOrigin.vertical]
    }
  }, [anchorEl, anchorOrigin.vertical])

  // Dropdown 수평 위치 계산
  const left = useMemo(() => {
    if (anchorEl) {
      const { width, left } = anchorEl.getBoundingClientRect()
      return {
        left: left,
        center: left + width / 2,
        right: left + width,
      }[anchorOrigin.horizontal]
    }
    return 0
  }, [anchorEl, anchorOrigin.horizontal])

  // Dropdown 이외의 영역 클릭 시 콜백 이벤트
  useOutsideListener(ref, () => {
    if (anchorEl) {
      onClose()
    }
  })

  if (show) {
    return (
      <Backdrop disabledDimmed={true}>
        <Box
          ref={ref}
          tabIndex={-1}
          css={{
            position: 'absolute',
            top: top,
            left: left,
            backgroundColor: theme.colors.white.main,
            minWidth: theme.inputSize.minWidth,
            minHeight: 100,
            boxShadow: theme.shadow.sm,
            borderRadius: theme.rounded.lg,
            border: `1px solid ${theme.colors.gray.dark}}`,
          }}
          {...rest}
        >
          {children}
        </Box>
      </Backdrop>
    )
  }

  return <Fragment />
}
