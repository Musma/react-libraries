# Local 폰트 적용

### Pretendard 폰트 사용
Github: https://github.com/orioncactus/pretendard
tistory: https://cactus.tistory.com/306

1. 프로젝트내에 woff2 폰트 파일 추가
- src/fonts 폴더내에 저장하였음
2. index.css 파일에 아래의 내용 추가
```
...
...

@layer base {
      @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'), url('./font/Pretendard-Black.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), url('./font/Pretendard-ExtraBold.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url('./font/Pretendard-Bold.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url('./font/Pretendard-SemiBold.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url('./font/Pretendard-Medium.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url('./font/Pretendard-Regular.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), url('./font/Pretendard-Light.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), url('./font/Pretendard-ExtraLight.subset.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url('./font/Pretendard-Thin.subset.woff2') format('woff2');
  }
  
  body {
    @apply font-pretendard;
  }
}

```

3. tailwind.config.js 파일에 아래의 내용 추가

```
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif"]
      }
    },
  },
```

### woff 와 woff2 차이

woff는 Web에서 사용할 수 있는 글꼴 포멧 중 하나로, 모든 주요 브라우저에서 지원되는 폰트이다.
woff2는 기존 woff에 비해 30% ~ 50% 정도 더 압축되어 가볍다.

### subset

불필요한 글자를 제거하고 사용할 글자만 남겨둔 폰트.
용량이 줄어서 좋음