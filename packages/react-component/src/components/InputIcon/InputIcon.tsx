import { SVGProps, useMemo } from 'react'

import { Size } from 'src/types'

interface InputIconProps {
  /**
   * size에 따라 아이콘의 크기가 달라집니다.
   *
   * @default
   * sm: 14 x 14
   * md: 14 x 14
   * lg: 16 x 16
   */
  size?: Size
  /**
   * @musma/react-icons에 있는 아이콘을 Props로 넘겨줍니다.
   */
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export const InputIcon = ({ size: _size = 'md', icon: Icon }: InputIconProps) => {
  const size = useMemo(() => {
    if (_size === 'lg') {
      return {
        width: 16,
        height: 16,
      }
    }
    return {
      width: 14,
      height: 14,
    }
  }, [_size])

  return <Icon {...size} />
}
