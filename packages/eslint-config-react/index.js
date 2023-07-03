// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // 타입스크립트에서 ESLint를 사용할 수 있게 하는 파서
  extends: [
    'eslint:recommended', // https://eslint.org/docs/latest/rules/ 에서 ✅ 표시된 모든 규칙 활성화
    'plugin:@typescript-eslint/recommended', // https://typescript-eslint.io/rules 에서 ✅ 표시된 모든 규칙 활성화
    'plugin:react/recommended', // https://github.com/jsx-eslint/eslint-plugin-react 에서 ✅ 표시된 모든 규칙 활성화
    'plugin:react-hooks/recommended', // React Hook이랑 관련된 추천 규칙 (react-hooks/rules-of-hooks, react-hooks/exhaustive-deps)
    'plugin:import/recommended', // https://www.npmjs.com/package/eslint-plugin-import 에서 ✅ 표시된 모든 규칙 활성화
    'plugin:import/typescript', // tsconfig.json의 path 설정과 연계하여 상대 경로 가져오기를 절대 경로 가져오기로 변경 ~> https://github.com/hdoan741/eslint-plugin-absolute-imports/
    'plugin:prettier/recommended', // "prettier/prettier": "error", "arrow-body-style": "off", "prefer-arrow-callback": "off"  ~> https://github.com/prettier/eslint-plugin-prettier
  ],
  plugins: ['unused-imports'], // 사용하지 않는 import 모듈을 찾아 제거해주는 plugin ~> https://www.npmjs.com/package/eslint-plugin-unused-imports
  settings: {
    'import/resolver': {
      // eslint-plugin-import의 경로 설정 옵션
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // 배열 안에 작성된 확장자를 생략
      },
      typescript: {},
    },
    react: {
      version: 'detect', // React의 버전을 감지 (ESLint 플러그인이 사용 중인 React 버전에 따라 적절한 규칙 적용)
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // ~> import React from 'react' 제외
    'import/default': 'off', // 모듈에서 기본으로 내보내는 객체 또는 값을 검사하는 옵션 ~> 'off'
    'import/order': [
      // Import Sort
      'error',
      {
        groups: [
          'builtin', // Node.js의 내장 모듈을 가져오는 import 문 ~> import fs from 'fs'
          'external', // 프로젝트의 외부 종속성을 가져오는 import 문 ~> import React from 'react'
          'internal', // 프로젝트 내부에서 정의한 모듈을 가져오는 import 문 ~> import combineTel from 'src/utils'
          ['parent', 'sibling', 'index'], // 차례대로 ~> import 문에서 부모 디렉토리로부터 가져온 모듈, import 문에서 현재 파일과 동일한 디렉토리에 있는 모듈, 현재 파일과 동일한 디렉토리에 있는 'index.ts'와 같은 인덱스 파일을 모두 포함하는 그룹
          'type', // import 문에서 타입 정의 파일을 포함하는 그룹
          'unknown', // import 문에서 그룹에 명시되지 않은 모듈을 포함하는 그룹
          'object', // import 문에서 JavaScript 객체 또는 모듈을 가져오는 그룹
        ],
        pathGroups: [
          // 추가적으로 옵션을 설정하고 싶은 경로를 다시 그룹화
          {
            pattern: '{react*, react*/**}', // 경로의 minimatch pattern ~> https://github.com/motemen/minimatch-cheat-sheet
            group: 'external', // 프로젝트의 외부 종속성을 가져오는 import 문 ~> import React from 'react'
            position: 'before', // 적용될 그룹에 배치될 위치 ~> before
          },
          {
            pattern: 'src/**',
            group: 'internal', // 프로젝트 내부에서 정의한 모듈을 가져오는 import 문 ~> import combineTel from 'src/utils'
          },
        ],
        pathGroupsExcludedImportTypes: ['react'], // 프로젝트의 외부 종속성을 가져오는 import 문에서 'react' 패키지 제거
        'newlines-between': 'always', // 위의 그룹 간에 최소 한 줄 이상의 줄바꿈 강제 및 그룹 안에서 줄바꿈 금지
        alphabetize: {
          order: 'asc', // 알파뱃 순서를 오름차순
          caseInsensitive: true, // 알파뱃에서 대소문자 무시
        },
      },
    ],
    'react/prop-types': 'off', // React 컴포넌트의 prop-types를 정의하지 않았을 때 경고 발생 ~> 'off'
    'import/no-unresolved': 'off', // 해석할 수 없는 모듈 경로를 감지하여 경고 발생 ~> 'off'
    'import/no-named-as-default-member': 'off', // 한 파일 내에서 export default A와 export B로 내보냈을 때, import A, { B } 에 대해 경고 발생 ~> 'off'
    'import/no-named-as-default': 'off', // 한 파일 내에서 export default A와 export B로 내보냈을 때, import A 에 대해 경고 발생 ~> 'off'
    'eol-last': 'error', // 코드의 마지막 줄에 개행 문자가 있지 않으면 'error'
    'no-unused-vars': 'off', // 사용되지 않는 변수를 사용하거나 가져오는 경우 경고 발생 ~> 'off'
    'unused-imports/no-unused-imports': 'error', // 사용되지 않는 'import'문을 감지 'error'
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      // vars: 'all': 모든 변수에 대해 검사 수행
      // varsIgnorePattern: 변수 이름이 _로 시작하는 것에 대해 검사에서 제외 ~> _timer
      // args: 'after-used': 사용 후에만 인수를 검사하도록 지정
      // argsIgnorePattern: '^_': 인수 이름이 밑줄로 시작하는 경우 검사에서 제외 ~> _onChange
    ],
    'react-hooks/exhaustive-deps': 'off', // useEffect, useCallback, useMemo 2번째 인자 안넣어도 경고 뜨지 않음
    'react/no-unknown-property': ['error', { ignore: ['css'] }], // 알 수 없는 속성이 React 컴포넌트에 사용되었을 때 경고를 발생, 'css' 속성을 무시하도록 지정합니다. (emotion)
    'prettier/prettier': [
      // eslint-config-prettier와 eslint-plugin-prettier를 통해 Prettier와 통합하는 규칙
      'error',
      {
        printWidth: 100, // 한 줄에 출력할 수 있는 최대 문자 수를 100개로 설정
        semi: false, // 세미콜론을 사용하지 않도록 설정
        singleQuote: true, // 문자열을 작은따옴표로 표시
        tabWidth: 2, // 탭 문자의 너비를 2로 설정
        trailingComma: 'all', // 여러 줄로 구성된 배열 또는 객체 리터럴의 마지막 요소 뒤에 항상 쉼표를 사용하도록 설정
      },
    ],
  },
}
