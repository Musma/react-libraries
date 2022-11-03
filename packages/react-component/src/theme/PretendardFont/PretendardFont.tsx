import { css, Global } from '@emotion/react'

import PretendardBold from 'src/assets/fonts/Pretendard-Bold.subset.woff2'
import PretendardMedium from 'src/assets/fonts/Pretendard-Medium.subset.woff2'
import PretendardRegular from 'src/assets/fonts/Pretendard-Regular.subset.woff2'
import PretendardSemiBold from 'src/assets/fonts/Pretendard-SemiBold.subset.woff2'

export const PretendardFont = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard';
          font-weight: 700;
          font-display: swap;
          src: local('Pretendard Bold'), url(${PretendardBold}) format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 600;
          font-display: swap;
          src: local('Pretendard SemiBold'), url(${PretendardSemiBold}) format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 500;
          font-display: swap;
          src: local('Pretendard Medium'), url(${PretendardMedium}) format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          font-display: swap;
          src: local('Pretendard Regular'), url(${PretendardRegular}) format('woff2');
        }

        html {
          font-family: 'Pretendard';
        }
      `}
    />
  )
}
