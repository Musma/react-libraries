import { useCallback, useMemo, useState } from 'react'

/**
 *
 * @param labels Tag 컴포넌트에 보여질 라벨을 문자열 배열 형태로 전달해주세요
 * @return
 * - tags: 관리할 tag들을 문자열 배열 형태로 반환 합니다
 *
 * - remove: tag 제거 함수
 *
 * - add: tag 추가 함수
 */
export function useTags(labels: string[]) {
  const [tagMap, setTagMap] = useState(new Map(labels.map((label) => [label, label])))

  const add = useCallback((tag: string) => {
    setTagMap((prev) => {
      const newTags = new Map(prev)
      newTags.set(tag, tag)
      return newTags
    })
  }, [])

  const remove = useCallback((tag: string) => {
    setTagMap((prev) => {
      const newTags = new Map(prev)
      newTags.delete(tag)
      return newTags
    })
  }, [])

  const tags = useMemo(() => {
    return Array.from(tagMap.values())
  }, [tagMap])

  return { tags, add, remove }
}
