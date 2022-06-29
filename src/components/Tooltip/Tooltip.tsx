import classnames from 'classnames'
import { ReactNode, useCallback } from 'react'
interface Props {
  children: ReactNode
  message: ReactNode
  width: number
  position?: 'left' | 'right' | 'top' | 'bottom'
}

//https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
import { Body3 } from 'src/components/Typography'
export const Tooltip = ({ children, message, width, position }: Props) => {
  const getStyle = useCallback(() => {
    const styles = {
      left: { right: width + 8 },
      right: { left: width + 8 },
      top: {
        marginLeft: -(width / 2),
      },
      bottom: {
        marginLeft: -(width / 2),
      },
    }
    if (!position) return styles['left']
    return styles[position]
  }, [position, width])
  const getClassnames = useCallback(() => {
    const classnames = {
      left: 'top-[-10px] right-[105%] after:left-[100%] after:top-[50%] after:mt-[-7px] after:border-l-[#363b40]',
      right:
        'top-[-10px] left-[105%] after:top-[50%] after:right-[100%] after:mt-[-7px] after:border-r-[#363b40]',
      bottom:
        'top-[105%] left-[50%] after:bottom-[100%] after:left-[50%] after:ml-[-7px] after:border-b-[#363b40]',
      top: 'bottom-[105%] left-[50%] after:left-[50%] after:top-[100%] after:ml-[-7px] after:border-t-[#363b40]',
    }
    if (!position) return classnames['left']
    return classnames[position]
  }, [position])

  return (
    <div className="group relative inline-block" style={{ width: width }}>
      {children}
      <div
        className={classnames(
          "invisible absolute z-10 inline rounded-[3px] bg-[#363b40] py-[9px] px-4 text-center text-white drop-shadow-[0_2px_8px_rgba(54,59,64,0.25)] after:absolute after:border-[7px] after:border-transparent after:content-[''] group-hover:visible",
          getClassnames(),
        )}
        style={getStyle()}
      >
        <Body3>{message}</Body3>
      </div>
    </div>
  )
}
