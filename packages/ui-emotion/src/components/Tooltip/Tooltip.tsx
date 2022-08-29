import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { useMemo } from 'react'
import { Typography } from '../Typography'
// FIXME: import 순서 및 정렬해주세요.

interface TooltipProps {
  children: React.ReactNode
  message: React.ReactNode
  position?: 'left' | 'right' | 'top' | 'bottom'
  width?: number
}

const tooltipCss = {
  container: css({ display: 'flex', alignItems: 'center', justifyContent: 'center' }),
  parent: css({
    position: 'relative',
    '&: hover .child': {
      visibility: 'visible',
    },
  }),
  base: css({
    visibility: 'hidden',
    backgroundColor: 'black',
    boxShadow: '0 2px 8px rgba(54, 54, 65, 0.25)',
    textAlign: 'center',
    borderRadius: '3px',
    padding: '9px 4px',
    position: 'absolute',
    zIndex: 10,
    '&::after': {
      // 툴팁 화살표
      content: '""',
      position: 'absolute',
    },
  }),
  position: {
    left: css({
      top: '50%',
      right: '100%',
      marginRight: '11px',
      transform: 'translate(0, -50%)',
      '&::after': {
        left: '100%',
        top: '50%',
        marginTop: '-5px',
        border: '5px solid',
        borderColor: 'transparent transparent transparent black',
      },
    }),
    right: css({
      top: '50%',
      left: '100%',
      marginLeft: '11px',
      transform: 'translate(0, -50%)',
      '&::after': {
        right: '100%',
        top: '50%',
        marginTop: '-5px',
        border: '5px solid',
        borderColor: 'transparent black transparent transparent',
      },
    }),
    top: css({
      left: '50%',
      bottom: '100%',
      marginBottom: '9px',
      transform: 'translate(-50%)',
      width: 'fit-content',
      '&::after': {
        left: '50%',
        top: '100%',
        marginLeft: '-5px',
        border: '5px solid',
        borderColor: 'black transparent transparent transparent',
      },
    }),
    bottom: css({
      left: '50%',
      top: '100%',
      marginTop: '9px',
      transform: 'translate(-50%)',
      width: 'fit-content',
      '&::after': {
        left: '50%',
        bottom: '100%',
        marginLeft: '-5px',
        border: '5px solid',
        borderColor: 'transparent transparent black transparent',
      },
    }),
  },
}
// 참고: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
export const Tooltip = ({ children, message, width, position = 'left' }: TooltipProps) => {
  const theme = useTheme()

  const color = useMemo(() => {
    const background = css({ backgroundColor: theme.color.black.main })
    const arrow = {
      left: css({
        '&::after': {
          borderColor: `transparent transparent transparent ${theme.color.black.main}`,
        },
      }),
      right: css({
        '&::after': {
          borderColor: `transparent ${theme.color.black.main} transparent transparent`,
        },
      }),
      top: css({
        '&::after': {
          borderColor: `${theme.color.black.main} transparent transparent transparent`,
        },
      }),
      bottom: css({
        '&::after': {
          borderColor: `transparent transparent ${theme.color.black.main} transparent`,
        },
      }),
    }
    return cx(background, arrow[position])
  }, [position, theme.color.black.main])

  return (
    <div className={tooltipCss.container}>
      <div className={tooltipCss.parent}>
        {children}
        <div
          className={cx('child', tooltipCss.base, tooltipCss.position[position], color)}
          style={{ width }}
        >
          <Typography
            className={css({ color: theme.color.white.main })}
            type="body"
            variant="body3"
          >
            {message}
          </Typography>
        </div>
      </div>
    </div>
  )
}
