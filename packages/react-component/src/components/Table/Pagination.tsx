import classNames from 'classnames'
import { useCallback, useMemo, useState } from 'react'

import { Caption } from '../Caption'
import { Paragraph } from '../Paragraph'
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

  // FIXME: Select 컴포넌트 개발되면 대체하기
  const handleLimitChange = useCallback(
    (value: string) => {
      if (!Number(value)) return
      setLimit(Number(value))
      onDataLimitChange(Number(value))
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
      <Paragraph element="p3">Rows per page</Paragraph>
      <input
        value={limit}
        onChange={(e) => handleLimitChange(e.target.value)}
        className="ml-2 h-8 w-[67px] rounded border"
      />
      <ArrowFirstIcon className="cursor-pointer" onClick={handleFirstClick} />
      <ArrowLeftIcon className="cursor-pointer" onClick={handlePrevClick} />
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
            <Caption>{getPage(index)}</Caption>
          </span>
        )
      })}
      <ArrowRightIcon className="cursor-pointer" onClick={handleNextClick} />
      <ArrowLastIcon className="cursor-pointer" onClick={handleLastClick} />
    </div>
  )
}
