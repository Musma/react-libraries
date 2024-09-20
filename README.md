## Private -> Public 가시성 변경(2023-06-12)

## 배포 방법

1. 코드를 수정합니다.
2. pnpm changeset
3. 배포할 패키지를 선택합니다.
4. major, minor, patch 버전을 고릅니다.
5. summary에 CHANGELOG.md에 나올 내용을 적습니다.
6. git push or pull request
7. pull requests에 자동으로 생성된 pr을 merge한다

[SEMVER가 무엇이냐?](https://semver.org/lang/ko/)

## References

- [https://maurodaprotis.hashnode.dev/how-to-add-changesets-workflow-to-a-simple-package-repo-on-github](https://maurodaprotis.hashnode.dev/how-to-add-changesets-workflow-to-a-simple-package-repo-on-github)
- [https://wiki.lucashan.space/programming/setting-monorepo-for-github-npm-registry-2/](https://wiki.lucashan.space/programming/setting-monorepo-for-github-npm-registry-2/)
- [https://wallacearchivemain.gatsbyjs.io/blog/auto-release-flow/](https://wallacearchivemain.gatsbyjs.io/blog/auto-release-flow/)

## Github Packages Private 배포 시

```
.npmrc에 아래 내용을 넣습니다.
.npmrc 파일의 경로는 프로젝트 또는 루트 폴더(cd ~) 둘 중 하나에 넣으면 됩니다.

@musma:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=토큰을넣어주세요
//registry.npmjs.org/:_authToken=토큰을넣어주세요
```

## Release Notes

### [24.09.20](https://github.com/Musma/react-libraries/tree/%40musma/react-component%401.3.3)

- aria-hidden 관련 크롬 에러 픽스 [#316](https://github.com/Musma/react-libraries/issues/316)
- Select 컴포넌트에서 상황에 따른 font 컬러 수정 [#319](https://github.com/Musma/react-libraries/issues/319)
- input 컴포넌트들의 border color가 미세하게 다른 부분 수정 [#318](https://github.com/Musma/react-libraries/issues/318)
- Modal 관련 컴포넌트의 css 수정 [#317](https://github.com/Musma/react-libraries/issues/317)
