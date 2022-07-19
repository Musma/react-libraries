
const fs = require('fs/promises')
const rimraf = require('rimraf')
const { transform } = require('@svgr/core');

const { generateComponentName } = require('./utils')

const outputPath = './dist';

async function buildComponents() {
  const files = await fs.readdir('./src/optimized/', 'utf-8')

  await fs.mkdir('./src/components')
  
  await Promise.all(
    files.flatMap(async (fileName) => {
      /**
       * optimized 폴더에 있는 svg 폴더의 내용을 가져옵니다.
       */
      const content = await fs.readFile(`./src/optimized/${fileName}`, 'utf-8');
      
      const componentName = generateComponentName(fileName)

      // svg 내용을 바탕으로 component 를 만듭니다.
      const svgReactContent = await transform(
        content,
        {
          icon: false,
          typescript: true,
          replaceAttrValues: { '#000': "{props.color || '#000'}" },
          svgProps: {
            width: 24,
            height: 24,
          },
        },
         {componentName}, 
      );

      // import * as React "react" 은 필요없으니 지우고 trim()을 이용하여 첫줄 공백을 없앱니다.
      const replaceCode = svgReactContent.replace('import * as React from "react";', '').trim()
      
      // ./src/components 하위에 ComponentName.tsx 파일을 생성하고 내용에 replaceCode를 넣습니다.
      await fs.writeFile(`./src/components/${componentName}.tsx`, replaceCode, 'utf-8')

      /**
       * ./src/index.ts 파일에 export 내용 추가 후 개행
       */
      await fs.appendFile('./src/index.ts', `export { default as ${componentName} } from './components/${componentName}'\n`)
    })  
  )
}

(function main() {
    console.log('🏗 아이콘 패키지 빌드 시작합니다.')
    new Promise((resolve) => {
      rimraf(`${outputPath}/*`, resolve)
      rimraf(`./src/index.ts`, resolve)
    })
      .then(() => buildComponents())
      .then(() => console.log('✅ 패키지 빌드가 완료되었습니다.'))
})()
