import { SVGProps, memo, useMemo } from 'react'

import { Size } from 'src/types'

interface InputIconProps extends SVGProps<SVGSVGElement> {
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

/**
 * @description
 * TextInput, DatePicker 같은 Input에 넣을 아이콘 컴포넌트입니다.
 */
export const InputIcon = memo(({ size: _size = 'md', icon: Icon, ...rest }: InputIconProps) => {
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

  return <Icon {...size} {...rest} />
})
