import { Fragment } from 'react'

import { ImageSkeleton, ListSkeletons, ShapeSkeleton, TableSkeletons } from './components'
import { SkeletonProps } from './types'

export const Skeleton = ({ variant, paragraph, ...rest }: SkeletonProps) => {
  return (
    <Fragment>
      {variant === 'list' && <ListSkeletons paragraph={paragraph} {...rest} />}

      {variant === 'table' && <TableSkeletons paragraph={paragraph} {...rest} />}

      {variant === 'image' && <ImageSkeleton {...rest} />}

      {(variant === 'rectangle' || variant === 'circle') && (
        <ShapeSkeleton variant={variant} {...rest} />
      )}
    </Fragment>
  )
}
