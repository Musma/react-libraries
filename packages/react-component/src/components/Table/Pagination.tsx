import classNames from 'classnames'
import { useCallback, useMemo, useState } from 'react'
import { Select } from '../Select'

import { Typography } from '../Typography'
import { ReactComponent as ArrowFirstIcon } from './images/arrow_first.svg'
import { ReactComponent as ArrowLastIcon } from './images/arrow_last.svg'
import { ReactComponent as ArrowLeftIcon } from './images/arrow_left.svg'
import { ReactComponent as ArrowRightIcon } from './images/arrow_right.svg'
import { PaginationProps } from './types'

export const Pagination = ({
  dataLimit,
  totalData,
  page,
  onPageChange,
  onDataLimitChange,
}: PaginationProps) => {
  const pageCount = 5
  const [limit, setLimit] = useState(dataLimit)
  const [currentPage, setCurrentPage] = useState(page)
  const [pageGroup, setPageGroup] = useState(1)

  const totalPage = useMemo(() => {
    return Math.ceil(totalData / dataLimit)
  }, [dataLimit, totalData])

  const lastGroup = useMemo(() => {
    return Math.ceil(totalPage / pageCount)
  }, [totalPage])

  const getRightEndPage = useCallback(
    (group: number) => {
      if (group * pageCount > totalPage) {
        return totalPage
      }
      return group * pageCount
    },
    [totalPage],
  )

  const getLeftEndPage = useCallback(
    (lastNumber: number) => {
      if (totalPage <= pageCount) return 1
      return lastNumber - (pageCount - 1)
    },
    [totalPage],
  )

  const handleLimitChange = useCallback(
    (value: number) => {
      setLimit(value)
      onDataLimitChange(value)
      setCurrentPage(1)
    },
    [onDataLimitChange],
  )

  const isCurrentPage = useCallback(
    (page: number) => {
      return page === currentPage
    },
    [currentPage],
  )

  const getPage = useCallback(
    (index: number) => {
      return getLeftEndPage(getRightEndPage(pageGroup)) + index
    },
    [getLeftEndPage, getRightEndPage, pageGroup],
  )

  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange(page)
      setCurrentPage(page)
    },
    [onPageChange],
  )

  const handlePrevClick = useCallback(() => {
    if (pageGroup === 1) return
    setPageGroup(pageGroup - 1)
    setCurrentPage(getLeftEndPage(getRightEndPage(pageGroup - 1)))
  }, [getLeftEndPage, getRightEndPage, pageGroup])

  const handleNextClick = useCallback(() => {
    if (pageGroup === lastGroup) return
    setPageGroup(pageGroup + 1)
    setCurrentPage(getRightEndPage(pageGroup + 1))
  }, [getRightEndPage, lastGroup, pageGroup])

  const handleFirstClick = useCallback(() => {
    setPageGroup(1)
    setCurrentPage(1)
  }, [])

  const handleLastClick = useCallback(() => {
    setPageGroup(lastGroup)
    setCurrentPage(totalPage)
  }, [lastGroup, totalPage])

  return (
    <div className="flex items-center justify-end">
      <Typography type="body" variant="body3" className="mr-2">
        Rows per page
      </Typography>
      <Select
        label=""
        value={String(limit)}
        options={[
          { label: '5', value: '5' },
          { label: '10', value: '10' },
          { label: '15', value: '15' },
          { label: '20', value: '20' },
          { label: '25', value: '25' },
        ]}
        onChange={(value) => handleLimitChange(Number(value))}
        inputClassName="w-[67px]"
      />
      <ArrowFirstIcon
        className={classNames('ml-2 cursor-pointer')}
        onClick={handleFirstClick}
        stroke={currentPage === 1 ? '#D0D5DD' : '#242E40'}
      />
      <ArrowLeftIcon
        className="cursor-pointer"
        onClick={handlePrevClick}
        stroke={pageGroup === 1 ? '#D0D5DD' : '#242E40'}
      />
      {Array.from({ length: totalPage >= pageCount ? pageCount : totalPage }).map((_, index) => {
        return (
          <span
            key={index}
            className={classNames(
              'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full',
              { 'bg-[#036DB8] text-white': isCurrentPage(getPage(index)) },
            )}
            onClick={() => handlePageChange(getPage(index))}
          >
            <Typography type="caption">{getPage(index)}</Typography>
          </span>
        )
      })}
      <ArrowRightIcon
        className="cursor-pointer"
        onClick={handleNextClick}
        stroke={pageGroup === lastGroup ? '#D0D5DD' : '#242E40'}
      />
      <ArrowLastIcon
        className="cursor-pointer"
        onClick={handleLastClick}
        stroke={currentPage === totalPage ? '#D0D5DD' : '#242E40'}
      />
    </div>
  )
}
