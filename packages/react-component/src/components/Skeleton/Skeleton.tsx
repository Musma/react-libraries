import { Fragment } from 'react'

import {
  CardSkeleton,
  ImageSkeleton,
  ListSkeletons,
  ShapeSkeleton,
  TableSkeletons,
} from './components'
import { SkeletonProps } from './types'

export const Skeleton = ({ variant, paragraph = 4, ...rest }: SkeletonProps) => {
  if (typeof paragraph !== 'undefined' && paragraph <= 0) {
    throw new Error('paragraph는 1이상 입력하세요.')
  }

  return (
    <Fragment>
      {variant === 'list' && <ListSkeletons paragraph={paragraph} {...rest} />}

      {variant === 'table' && <TableSkeletons paragraph={paragraph} {...rest} />}

      {variant === 'image' && <ImageSkeleton {...rest} />}

      {variant === 'card' && <CardSkeleton {...rest} />}

      {(variant === 'rectangle' || variant === 'circle') && (
        <ShapeSkeleton variant={variant} {...rest} />
      )}
    </Fragment>
  )
}
