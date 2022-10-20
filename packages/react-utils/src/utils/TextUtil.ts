/**
 * @description
 * String을 받아서 첫글자는 대문자, dash는 공백으로 처리하여 리턴합니다.
 * @param str
 * @param dash
 * @returns
 */
export const firstLetterUppercase = (str?: string | null, dash?: boolean) => {
  if (str && str.length > 1) {
    const repString = str.replace(/_/gi, ' ')
    return repString[0].toUpperCase() + repString.slice(1, str.length).toLocaleLowerCase()
  }
  return dash ? '-' : ''
}

/**
 * @description
 * text 값을 전달받아서 null 또는 undefiend 일 경우 '-' 을 반환하는 함수입니다.
 * @param text 바꿀 텍스트
 */
export function convertEmptyText(text?: string | null): string {
  const trimText = text?.trim()
  if (trimText && trimText.length > 0) {
    return trimText
  }
  return '-'
}
