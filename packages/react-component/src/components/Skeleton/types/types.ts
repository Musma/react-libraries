import { HTMLAttributes } from 'react'

/**
 * variant
 * @description 스켈레톤 출력할 모양
 *
 * paragraph
 * @description variant가 table, list인 경우 출력 갯수(row). 기본 4줄
 *
 * backgroundColor
 * @description 스켈레톤 색상
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangle' | 'image' | 'table' | 'list'
  paragraph?: number
}
