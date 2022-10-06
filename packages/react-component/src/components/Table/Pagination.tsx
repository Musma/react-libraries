import { useCallback, useMemo, useState } from 'react'

import { css, useTheme } from '@emotion/react'

import { Typography, UsePaginationType, Select } from 'src/components'

import { ReactComponent as ArrowFirstIcon } from './images/arrow_first.svg'
import { ReactComponent as ArrowLastIcon } from './images/arrow_last.svg'
import { ReactComponent as ArrowLeftIcon } from './images/arrow_left.svg'
import { ReactComponent as ArrowRightIcon } from './images/arrow_right.svg'

const containerCss = css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' })

const pageNumberCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  width: '24px',
  cursor: 'pointer',
  borderRadius: '9999px',
})
interface PaginationProps {
  pagination: UsePaginationType
  totalCount: number
}
export const Pagination = ({ totalCount, pagination }: PaginationProps) => {
  const { limit, page, onDataLimitChange, onPageChange } = pagination
  const theme = useTheme()
  const pageCount = 5
  const [currentPage, setCurrentPage] = useState(page)
  const [pageGroup, setPageGroup] = useState(1)

  const totalPage = useMemo(() => {
    return Math.ceil(totalCount / limit)
  }, [limit, totalCount])

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
      onDataLimitChange(value)
      setCurrentPage(1)
      onPageChange(1)
    },
    [onDataLimitChange, onPageChange],
  )

  const isCurrentPage = useCallback(
    (page: number) => {
      return page === currentPage
    },
    [currentPage],
  )

  const getPageNumber = useCallback(
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
    onPageChange(getLeftEndPage(getRightEndPage(pageGroup - 1)))
  }, [getLeftEndPage, getRightEndPage, onPageChange, pageGroup])

  const handleNextClick = useCallback(() => {
    if (pageGroup === lastGroup) return
    setPageGroup(pageGroup + 1)
    setCurrentPage(getRightEndPage(pageGroup + 1))
    onPageChange(getRightEndPage(pageGroup + 1))
  }, [getRightEndPage, lastGroup, onPageChange, pageGroup])

  const handleFirstClick = useCallback(() => {
    setPageGroup(1)
    setCurrentPage(1)
    onPageChange(1)
  }, [onPageChange])

  const handleLastClick = useCallback(() => {
    setPageGroup(lastGroup)
    setCurrentPage(totalPage)
    onPageChange(totalPage)
  }, [lastGroup, onPageChange, totalPage])

  return (
    <div css={containerCss}>
      <Typography type="body3" css={{ marginRight: '8px' }}>
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
        inputStyle={{ width: '67px' }}
      />
      <ArrowFirstIcon
        css={{ marginLeft: '8px', cursor: 'pointer' }}
        onClick={handleFirstClick}
        stroke={currentPage === 1 ? '#D0D5DD' : '#242E40'}
      />
      <ArrowLeftIcon
        css={{ cursor: 'pointer' }}
        onClick={handlePrevClick}
        stroke={pageGroup === 1 ? '#D0D5DD' : '#242E40'}
      />
      {Array.from({ length: totalPage >= pageCount ? pageCount : totalPage }).map((_, index) => {
        return (
          <span
            key={index}
            css={[
              pageNumberCss,
              isCurrentPage(getPageNumber(index))
                ? css({ backgroundColor: theme.color.blue.main })
                : {},
            ]}
            onClick={() => handlePageChange(getPageNumber(index))}
          >
            <Typography
              type="caption1"
              css={isCurrentPage(getPageNumber(index)) ? { color: theme.color.white.main } : {}}
            >
              {getPageNumber(index)}
            </Typography>
          </span>
        )
      })}
      <ArrowRightIcon
        css={{ cursor: 'pointer' }}
        onClick={handleNextClick}
        stroke={pageGroup === lastGroup ? '#D0D5DD' : '#242E40'}
      />
      <ArrowLastIcon
        css={{ cursor: 'pointer' }}
        onClick={handleLastClick}
        stroke={currentPage === totalPage ? '#D0D5DD' : '#242E40'}
      />
    </div>
  )
}
