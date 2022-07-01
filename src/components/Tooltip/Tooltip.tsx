import classnames from 'classnames'
import React from 'react'

import { Body3 } from 'src/components/Typography'

type Position = 'left' | 'right' | 'top' | 'bottom'
interface Props {
  children: React.ReactNode
  message: React.ReactNode
  width?: number
  position?: Position
}

// 참고: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
export const Tooltip = ({ children, message, width, position }: Props) => {
  const getClassnames = React.useCallback((position?: Position) => {
    const classnames = {
      left: 'top-[50%] right-[100%] mr-[11px] translate-y-[-50%] after:left-[100%] after:top-[50%] after:mt-[-7px] after:border-l-[#363b40]',
      right:
        'top-[50%] left-[100%] ml-[11px] translate-y-[-50%] after:top-[50%] after:right-[100%] after:mt-[-7px] after:border-r-[#363b40]',
      bottom:
        'top-[100%] left-[50%] translate-x-[-50%] mt-[9px] w-fit after:bottom-[100%] after:left-[50%] after:ml-[-7px] after:border-b-[#363b40]',
      top: 'bottom-[100%] left-[50%] translate-x-[-50%] mb-[9px] w-fit after:left-[50%] after:top-[100%] after:ml-[-7px] after:border-t-[#363b40]',
    }
    if (!position) return classnames['left']
    return classnames[position]
  }, [])

  return (
    <div className="group relative inline-block">
      {children}
      <div
        className={classnames(
          "absolute z-10 inline rounded-[3px] bg-[#363b40] px-4 py-[9px] text-center text-white drop-shadow-[0_2px_8px_rgba(54,59,64,0.25)] after:absolute after:border-[7px] after:border-transparent after:content-[''] group-hover:visible",
          getClassnames(position),
        )}
        style={{ width }}
      >
        <Body3 className="pt-[2px] leading-[18px]">{message}</Body3>
      </div>
    </div>
  )
}
