import { useCallback, useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  OutlineArrowFirstMediumIcon,
  OutlineArrowLeftMediumIcon,
  OutlineArrowLastMediumIcon,
  OutlineArrowRightMediumIcon,
} from '@musma/react-icons'

import { Typography, UsePaginationType, Select, IconAdornment, Box } from 'src/components'
interface PaginationProps {
  pagination: UsePaginationType
  totalCount: number
}
export const Pagination = ({
  totalCount,
  pagination: { limit, page, onDataLimitChange, onPageChange },
}: PaginationProps) => {
  const theme = useTheme()
  const pageCount = 5
  const [currentPage, setCurrentPage] = useState(page)
  const [pageGroup, setPageGroup] = useState(1)

  // 전체 페이지 수
  const totalPage = useMemo(() => {
    return Math.ceil(totalCount / limit)
  }, [limit, totalCount])

  // 마지막 그룹 수
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
      if (totalPage <= pageCount) {
        return 1
      }
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
    if (pageGroup === 1) {
      return
    }
    setPageGroup(pageGroup - 1)
    setCurrentPage(getLeftEndPage(getRightEndPage(pageGroup - 1)))
    onPageChange(getLeftEndPage(getRightEndPage(pageGroup - 1)))
  }, [getLeftEndPage, getRightEndPage, onPageChange, pageGroup])

  const handleNextClick = useCallback(() => {
    if (pageGroup === lastGroup) {
      return
    }
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
    <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Typography type="body3" css={{ marginRight: '8px' }}>
        Rows per page
      </Typography>
      <Select
        label=""
        value={String(limit)}
        options={[
          { label: '10', value: '10' },
          { label: '15', value: '15' },
          { label: '20', value: '20' },
          { label: '25', value: '25' },
        ]}
        onChange={(value) => handleLimitChange(Number(value))}
      />

      <IconAdornment onClick={handleFirstClick} noPadding={true} disabled={currentPage === 1}>
        <OutlineArrowFirstMediumIcon color={currentPage === 1 ? '#D0D5DD' : '#242E40'} />
      </IconAdornment>

      <IconAdornment onClick={handlePrevClick} noPadding={true} disabled={pageGroup === 1}>
        <OutlineArrowLeftMediumIcon color={pageGroup === 1 ? '#D0D5DD' : '#242E40'} />
      </IconAdornment>

      {Array.from({ length: totalPage >= pageCount ? pageCount : totalPage }).map((_, index) => {
        return (
          <IconAdornment
            key={index}
            noPadding={true}
            onClick={() => handlePageChange(getPageNumber(index))}
          >
            <span
              css={[
                {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '24px',
                  width: '24px',
                  cursor: 'pointer',
                  borderRadius: '9999px',
                },
                isCurrentPage(getPageNumber(index)) && {
                  backgroundColor: theme.colors.primary.main,
                },
              ]}
            >
              <Typography
                type="caption1"
                css={isCurrentPage(getPageNumber(index)) ? { color: theme.colors.white.main } : {}}
              >
                {getPageNumber(index)}
              </Typography>
            </span>
          </IconAdornment>
        )
      })}
      <IconAdornment onClick={handleNextClick} noPadding={true} disabled={pageGroup === lastGroup}>
        <OutlineArrowRightMediumIcon color={pageGroup === lastGroup ? '#D0D5DD' : '#242E40'} />
      </IconAdornment>

      <IconAdornment
        onClick={handleLastClick}
        noPadding={true}
        disabled={currentPage === totalPage}
      >
        <OutlineArrowLastMediumIcon color={currentPage === totalPage ? '#D0D5DD' : '#242E40'} />
      </IconAdornment>
    </Box>
  )
}
