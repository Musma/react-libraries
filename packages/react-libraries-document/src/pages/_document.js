import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * @description
 * 1. _document를 작성할 때는 Document 클래스를 상속받는 클래스 컴포넌트로 작성해야만 하며, 렌더 함수는 꼭 <Html>, <Head>, <Main>, <NextScript> 요소를 리턴해줘야 합니다.
 * 2. _document에서 사용하는 <Head> 태그는 next/head가 아닌 next/document 모듈에서 불러와야 하는데요, _document의 <Head> 태그에는 모든 문서에 공통적으로 적용될 내용(Ex. charset, 뷰포트 메타태그 등)이 들어가야 합니다.
 * _document는 언제나 서버에서 실행되므로 브라우저 api 또는 이벤트 핸들러가 포함된 코드는 실행되지 않습니다.
 * 또한 <Main /> 부분을 제외한 부분은 브라우저에서 실행되지 않으므로 이곳에 비즈니스 로직을 추가해서는 안되며, _app과 마찬가지로 getStaticProps와 getServerSideProps 를 통해 데이터를 불러올 수 없습니다.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>무스마</title>
          <meta name="description" content="MUSMA Tools" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Tailwind CSS Font Family */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
