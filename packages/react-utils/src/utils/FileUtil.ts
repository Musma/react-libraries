/**
 * 파일 업로드 용량 2MB 제한
 * @param fileSize 파일 용량
 * @return size.ext 파일 용량 + 용량 단위
 */
export const getFileSize = (fileSize?: number) => {
  if (!fileSize) {
    return 0
  }

  const kb = 1024
  const sizes = ['Bytes', 'KB', 'MB']

  // 단위 구하기 0: bytes, 1: KB, 2: MB
  const getSize = Math.floor(Math.log(fileSize) / Math.log(kb))

  // 파일 용량 계산하기 bytes -> kb -> mb
  const calSize = Math.round(fileSize / 1024 / 1024)

  if (calSize <= 2) {
    return Math.round(fileSize / Math.pow(kb, getSize)) + sizes[getSize]
  }
}
