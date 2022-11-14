import { Fragment, HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineCloseIcon } from '@musma/react-icons'

import { Divider, IconAdornment, Typography } from 'src/components'
import { Box } from 'src/elements'

interface ModalTitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @required
   * 모달 닫기 버튼 눌렀을 때 동작하는 콜백 함수입니다.
   */
  onClose: () => void
}

/**
 * 모달의 Header 부분을 담당하는 컴포넌트입니다.
 */
export const ModalTitle = ({ children, onClose, ...rest }: ModalTitleProps) => {
  const theme = useTheme()
  return (
    <Fragment>
      <Box
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing.md,
          },
        ]}
        {...rest}
      >
        <Typography type="subTitle2">{children}</Typography>

        <IconAdornment onClick={onClose}>
          <OutlineCloseIcon width={16} height={16} color={theme.colors.black.lighter} />
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
