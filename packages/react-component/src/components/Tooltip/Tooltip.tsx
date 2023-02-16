import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { Typography } from '../Typography'

type PositionType = 'left' | 'right' | 'top' | 'bottom'

interface TooltipProps {
  /**
   * @required
   * @type {ReactNode}
   *
   * @description
   * 마우스오버를 했을 때, 툴팁을 나타낼 개체입니다
   */
  children: ReactNode
  /**
   * @required
   * @type {string}
   * body3( fontWeight: 400, lineHeight: 1, fontSize: 0.875rem )이 적용됩니다
   * @type {ReactNode}
   * 상속받는 CSS가 없습니다
   *
   * @description
   * 마우스오버를 했을 때, 툴팁의 메세지 입니다
   */
  message: string | ReactNode
  /**
   * @optional
   * @default left
   * @options left | top | right | bottom
   * @type string
   *
   * @description
   * 마우스오버를 했을 때, 툴팁이 보여지는 위치 입니다
   */
  position?: PositionType
  /**
   * @optional
   *
   * @description
   * 마우스오버를 했을 때, 툴팁의 너비입니다
   */
  width?: number
}
// 참고: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
/**
 *
 * @param message 마우스오버를 했을 때, 툴팁의 메세지 입니다
 * @param width 마우스오버를 했을 때, 툴팁의 너비입니다
 * @param position 마우스오버를 했을 때, 툴팁이 보여지는 위치 입니다
 * @param children 마우스오버를 했을 때, 툴팁을 나타낼 개체입니다
 * @description
 * 툴팁 입니다
 */
export const Tooltip = ({ children, message, width, position = 'left' }: TooltipProps) => {
  const theme = useTheme()
  return (
    <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover .child': {
            visibility: 'visible',
          },
        }}
      >
        {children}
        <Box
          css={[
            // Base CSS
            {
              position: 'absolute',
              zIndex: 10,
              padding: '9px 4px',
              borderRadius: '3px',
              backgroundColor: theme.colors.black.main,
              boxShadow: '0 2px 8px rgba(54, 54, 65, 0.25)',
              textAlign: 'center',
              visibility: 'hidden',
              '&::after': {
                // 툴팁 화살표
                content: '""',
                position: 'absolute',
              },
            },
            // Position CSS
            {
              left: {
                top: '50%',
                right: '100%',
                marginRight: '11px',
                transform: 'translate(0, -50%)',
                '&::after': {
                  // 툴팁 화살표
                  left: '100%',
                  top: '50%',
                  marginTop: '-5px',
                  border: '5px solid',
                  borderColor: `transparent transparent transparent ${theme.colors.black.main}`,
                },
              },
              top: {
                left: '50%',
                bottom: '100%',
                width: 'fit-content',
                marginBottom: '9px',
                transform: 'translate(-50%)',
                '&::after': {
                  // 툴팁 화살표
                  left: '50%',
                  top: '100%',
                  marginLeft: '-5px',
                  border: '5px solid',
                  borderColor: `${theme.colors.black.main} transparent transparent transparent`,
                },
              },
              right: {
                left: '100%',
                top: '50%',
                marginLeft: '11px',
                transform: 'translate(0,-50%)',
                '&::after': {
                  // 툴팁 화살표
                  top: '50%',
                  right: '100%',
                  marginTop: '-5px',
                  border: '5px solid',
                  borderColor: `transparent ${theme.colors.black.main} transparent transparent`,
                },
              },
              bottom: {
                left: '50%',
                top: '100%',
                width: 'fit-content',
                marginTop: '9px',
                transform: 'translate(-50%)',
                '&::after': {
                  // 툴팁 화살표
                  left: '50%',
                  bottom: '100%',
                  marginLeft: '-5px',
                  border: '5px solid',
                  borderColor: `transparent transparent ${theme.colors.black.main} transparent`,
                },
              },
            }[position],
          ]}
          style={{ width }}
          className="child"
        >
          {typeof message === 'string' ? (
            <Typography type="body3" css={{ color: theme.colors.white.main }}>
              {message}
            </Typography>
          ) : (
            <Box>{message}</Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
