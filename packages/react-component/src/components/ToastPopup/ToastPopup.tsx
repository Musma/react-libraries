import { Fragment, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import {
  FillCautionIcon,
  FillErrorIcon,
  FillCheckCircleIcon,
  FillInformationIcon,
  OutlineCloseIcon,
} from '@musma/react-icons'

export type StateType = 'info' | 'warning' | 'error' | 'success'

export interface IToastPopupProps {
  state?: StateType
  title: string
  description?: string
  mode?: 'light' | 'dark'
  onCloseClick(): void
}

export const ToastPopup = ({
  state = 'info',
  title,
  description,
  mode = 'light',
  onCloseClick,
}: IToastPopupProps) => {
  const { color } = useTheme()

  const stylesByState = useMemo(
    () => ({
      info: {
        img: <FillInformationIcon color={color.blue.main} />,
        bgColor: color.gray.light,
        bgDarkColor: '#44505C',
      },
      warning: {
        img: <FillCautionIcon color={color.orange.main} />,
        bgColor: color.orange.lighter,
        bgDarkColor: '#4A4643',
      },
      error: {
        img: <FillErrorIcon color={color.red.main} />,
        bgColor: color.red.lighter,
        bgDarkColor: '#4A4347',
      },
      success: {
        img: <FillCheckCircleIcon color={color.green.main} />,
        bgColor: color.green.lighter,
        bgDarkColor: '#494A43',
      },
    }),
    [
      color.blue.main,
      color.gray.light,
      color.green.lighter,
      color.green.main,
      color.orange.lighter,
      color.orange.main,
      color.red.lighter,
      color.red.main,
    ],
  )

  const stylesByMode = useMemo(
    () => ({
      light: {
        fontColor: 'black',
        bgColor: stylesByState[state].bgColor,
      },
      dark: {
        fontColor: 'white',
        bgColor: stylesByState[state].bgDarkColor,
      },
    }),
    [state, stylesByState],
  )

  return (
    <div
      css={{
        opacity: 1,
        margin: '10px 0',
        padding: '12px 16px',
        background: stylesByMode[mode].bgColor,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.35) ',
        borderRadius: '3px',
        transition: 'all 1s',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: description ? 'normal' : 'center',
          color: stylesByMode[mode].fontColor,
        }}
      >
        {stylesByState[state].img}
        <div css={{ margin: '0 54px 0 10px' }}>
          <span css={{ fontWeight: description ? 'bold' : undefined }}>{title}</span>
          {description && (
            <Fragment>
              <br />
              {description}
            </Fragment>
          )}
        </div>
        <OutlineCloseIcon
          cursor="pointer"
          color={stylesByMode[mode].fontColor}
          onClick={onCloseClick}
        />
      </div>
    </div>
  )
}
