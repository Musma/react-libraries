import { Fragment, HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { useOutsideListener, useSetRef } from '@musma/react-utils'

import { Backdrop } from 'src/components'
import { Box } from 'src/elements'

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
   * horizontal: 수평 기준점
   * vertical: 수직 기준점
   */
  anchorOrigin?: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  }
  /**
   * 설명 쓰기가 너무 어렵구만..
   */
  align?: 'start' | 'end'
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
  const [ref, setRef] = useSetRef()

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

      const refWidth = ref?.getBoundingClientRect().width || 0

      return {
        left: left,
        center: left + width / 2 - refWidth / 2,
        right: left + width - refWidth,
      }[anchorOrigin.horizontal]
    }
    return 0
  }, [anchorEl, anchorOrigin.horizontal, ref])

  // Dropdown 이외의 영역 클릭 시 콜백 이벤트
  useOutsideListener(ref, () => {
    onClose()
  })

  if (show) {
    return (
      <Backdrop disableDimmed={true} disableOverflowHidden={true}>
        <Box
          ref={setRef}
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
