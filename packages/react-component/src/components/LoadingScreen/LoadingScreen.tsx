import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

/**
 * Route Suspense Fallback에 넣어서 사용합니다.
 * @returns
 */
export const LoadingScreen = () => {
  const theme = useTheme()
  return (
    <Box css={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width={80}
        height={80}
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill={theme.colors.primary.main}
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
    </Box>
  )
}
