import { MouseEvent, useCallback, useMemo, useState } from 'react'

import { Box } from 'src/elements'

import { Button, Dropdown, Select } from './components'

const OPTIONS = [
  { label: '31', value: 31 },
  { label: '32', value: 32 },
]

export const Component = () => {
  const [dropdown, setDropdown] = useState<HTMLButtonElement | null>(null)

  const toggleModal = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setDropdown(event.currentTarget)
  }, [])

  const show = useMemo(() => {
    return Boolean(dropdown)
  }, [dropdown])

  const close = useCallback(() => {
    setDropdown(null)
  }, [])

  return (
    <Box>
      <Box css={{ textAlign: 'center', padding: 40 }}>
        <Button onClick={toggleModal}>드롭다운 버튼</Button>
      </Box>

      <Dropdown
        show={show}
        anchorEl={dropdown}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={() => {
          close()
        }}
      />

      <Select
        value={31}
        options={OPTIONS}
        onChange={() => {
          return
        }}
      />
    </Box>
  )
}
