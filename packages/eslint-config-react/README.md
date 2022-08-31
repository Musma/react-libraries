# @musma/eslint-config

무스마 ESLint Config 입니다. Typescript를 사용하는 모든 프로젝트에서 사용하여 코딩 컨벤션을 유지하도록 합시다.

## 설치방법

1. 루트 디렉토리에 .npmrc 파일을 생성합니다. (주의! 루트 디렉토리입니다. 프로젝트내에서 하는게 아닙니다.)

```
vi ~/.npmrc
```

2. 루트 디렉토리의 .npmrc 파일에 아래의 내용을 넣습니다.
   토큰 발급 방법은 https://musma.github.io/2019/09/30/github-package-registry.html

```
@musma:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={자신의토큰}
```

3. 프로젝트내에 .npmrc 파일 생성 (이미 있다면 패쓰!)

```
vi .npmrc
```

4. 프로젝트내에 .npmrc 파일에 아래 내용 추가

```
@musma:registry=https://npm.pkg.github.com/
```

5. @musma/eslint-config 의존성 설치

```
yarn add -D @musma/eslint-config
```

6. 프로잭트내에 `.eslintrc` 파일 생성(이미 있다면 패쓰!)

```
vi .eslintrc
```

7. 프로젝트내에 `.eslintrc` 파일에 아래의 내용을 추가합니다.

```
{
  "extends": ["@musma"]
}
```

## Lint, Prettier가 작동하지 않을 경우

1. VS Code 에서 `Command + ,` 를 클릭하여 설정 페이지를 연다

![스크린샷 2022-06-30 오후 2 00 12](https://user-images.githubusercontent.com/28969912/176596876-05978501-22cc-4f9a-ba94-27a9c49358c4.png)

2. `사용자` 탭에서 화면 상단의 `JSON 열기` 버튼을 클릭한다.

3. 개인이 사용하는 VS Code Theme 관련 코드를 제외하고 모두 없앤다.

## License

Open source [licensed as MIT](./LICENSE).

- @typescript-eslint/parser : 타입스크립트에서 ESLint를 사용할 수 있게 하는 파서
- @typescript-eslint/eslint-plugin: 코드 베이스에서 ESLint 규칙을 적용하는 플러그인
- eslint-config-prettier: 불필요하거나 Prettier와 충돌할 수 있는 모든 규칙을 비활성화
- eslint-plugin-prettier: 코드 포매팅할 때 Prettier를 사용하게 만드는 규칙 추가
