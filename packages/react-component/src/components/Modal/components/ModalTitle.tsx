import { Fragment, HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { CloseIcon } from '@musma/react-icons'

import { Divider, IconAdornment, Typography } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface ModalTitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default md
   * 모달 사이즈에 따라 버튼 컨테이너의 패딩이 결정됩니다.
   */
  size?: Size
  /**
   * @required
   * 모달 닫기 버튼 눌렀을 때 동작하는 콜백 함수입니다.
   */
  onClose: () => void
}

/**
 * 모달의 Header 부분을 담당하는 컴포넌트입니다.
 */
export const ModalTitle = ({ size, children, onClose, ...rest }: ModalTitleProps) => {
  const theme = useTheme()

  const padding = useMemo(() => {
    if (size === 'sm') {
      return `${theme.spacing.md}px`
    }

    return `${theme.spacing.md}px ${theme.spacing.lg}px`
  }, [size, theme.spacing.lg, theme.spacing.md])

  return (
    <Fragment>
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding,
          },
        ]}
        {...rest}
      >
        <Typography type="subTitle2">{children}</Typography>

        <IconAdornment onClick={onClose} css={{ marginRight: -theme.spacing.sm }}>
          <CloseIcon width={16} height={16} color={theme.colors.black.lighter} />
        </IconAdornment>
      </Box>

      <Divider
        css={{
          margin: 0,
          borderTop: `1px solid ${theme.colors.gray.darker}`,
        }}
      />
    </Fragment>
  )
}
