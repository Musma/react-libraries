import classnames from 'classnames'
import { useMemo } from 'react'

import { Typography } from '../Typography'

type Position = 'left' | 'right' | 'top' | 'bottom'
interface TooltipProps {
  children: React.ReactNode
  message: React.ReactNode
  width?: number
  position?: Position
}

// 참고: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
export const Tooltip = ({ children, message, width, position = 'left' }: TooltipProps) => {
  const tooltipBox = useMemo(() => {
    const common = 'rounded-[3px] absolute z-10 inline px-4 py-[9px] text-center'
    const color = 'bg-[#363b40] drop-shadow-[0_2px_8px_rgba(54,59,64,0.25)]' // TODO: dark mode 대응 코드 추가하기
    const positions = {
      left: 'top-[50%] right-[100%] mr-[11px] translate-y-[-50%]',
      right: 'top-[50%] left-[100%] ml-[11px] translate-y-[-50%]',
      bottom: 'top-[100%] left-[50%] translate-x-[-50%] mt-[9px] w-fit',
      top: 'bottom-[100%] left-[50%] translate-x-[-50%] mb-[9px] w-fit',
    }
    return `${positions[position]} ${common} ${color}`
  }, [position])

  const arrow = useMemo(() => {
    const positions = {
      left: 'after:left-[100%] after:top-[50%] after:mt-[-7px] after:border-l-[#363b40]',
      right: 'after:top-[50%] after:right-[100%] after:mt-[-7px] after:border-r-[#363b40]',
      bottom: 'after:bottom-[100%] after:left-[50%] after:ml-[-7px] after:border-b-[#363b40]',
      top: 'after:left-[50%] after:top-[100%] after:ml-[-7px] after:border-t-[#363b40]',
    }
    const common = 'after:absolute after:border-[7px] after:border-transparent after:content-[""]'
    return `${positions[position]} ${common}`
  }, [position])

  return (
    <div className="flex items-center justify-center">
      <div className="group relative">
        {children}
        <div
          className={classnames('invisible group-hover:visible', tooltipBox, arrow)}
          style={{ width }}
        >
          <Typography
            type="body"
            variant="body3"
            className="pt-[2px] leading-[18px]"
            color="#FFFFFF"
          >
            {message}
          </Typography>
        </div>
      </div>
    </div>
  )
}
