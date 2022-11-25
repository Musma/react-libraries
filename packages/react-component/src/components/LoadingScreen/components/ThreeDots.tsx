import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

interface ThreeDotsProps {
  width?: number
  height?: number
  fill?: string
}

export const ThreeDots = ({ width = 80, height = 80, fill: fillProp }: ThreeDotsProps) => {
  const theme = useTheme()

  const fill = useMemo(() => {
    return fillProp || theme.colors.primary.main
  }, [fillProp, theme.colors.primary.main])

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      data-testid="three-dots-svg"
    >
      <circle cx="15" cy="15" r={Number(9) + 6}>
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />

        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="60" cy="15" r={9} attributeName="fill-opacity" from="1" to="0.3">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />

        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="105" cy="15" r={Number(9) + 6}>
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />

        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}
