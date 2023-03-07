import { HTMLAttributes } from 'react'

/**
 * variant
 * @description 스켈레톤 출력할 모양
 *
 * paragraph
 * @description variant가 table, list인 경우 출력 갯수(row). 기본 4줄
 *
 * column
 * @description variant가 table인 경우 컬럼 출력 갯수. 기본 5개
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangle' | 'image' | 'table' | 'list' | 'card'
  paragraph?: number
  column?: number
}
