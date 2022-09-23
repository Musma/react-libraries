import { css, Global } from '@emotion/react'

import PretendardBlack from 'src/assets/fonts/Pretendard-Black.subset.woff2'
import PretendardBold from 'src/assets/fonts/Pretendard-Bold.subset.woff2'
import PretendardExtraBold from 'src/assets/fonts/Pretendard-ExtraBold.subset.woff2'
import PretendardExtraLight from 'src/assets/fonts/Pretendard-ExtraLight.subset.woff2'
import PretendardLight from 'src/assets/fonts/Pretendard-Light.subset.woff2'
import PretendardMedium from 'src/assets/fonts/Pretendard-Medium.subset.woff2'
import PretendardRegular from 'src/assets/fonts/Pretendard-Regular.subset.woff2'
import PretendardSemiBold from 'src/assets/fonts/Pretendard-SemiBold.subset.woff2'
import PretendardThin from 'src/assets/fonts/Pretendard-Thin.subset.woff2'

export const PretendardFont = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard';
          font-weight: 900;
          font-display: swap;
          src: local('Pretendard Black'), url(${PretendardBlack}) format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 800;
          font-display: swap;
          src: local('Pretendard ExtraBold'), url(${PretendardExtraBold}) format('woff2');
        }

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

        @font-face {
          font-family: 'Pretendard';
          font-weight: 300;
          font-display: swap;
          src: local('Pretendard Light'), url(${PretendardLight}) format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 200;
          font-display: swap;
          src: local('Pretendard ExtraLight'), url(${PretendardExtraLight}) format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 100;
          font-display: swap;
          src: local('Pretendard Thin'), url(${PretendardThin}) format('woff2');
        }

        html {
          font-family: 'Pretendard';
        }
      `}
    />
  )
}
