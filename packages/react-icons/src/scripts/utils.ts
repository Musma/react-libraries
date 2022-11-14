import camelcase from 'camelcase'

/**
 * 
 * @param fileName 파일명
 * @returns 파일이름
 * 
 * 파일명을 ${파스칼케이스}Icon으로 변경합니다.
 */
export const generateComponentName = (fileName: string) => {
  const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
    pascalCase: true,
  })}Icon`

  return componentName
}
