import { useCallback, useState } from 'react'

import { Box } from 'src/elements'

import { Tabs, Tab, TabContainer, TabPanel, Checkbox, TextInput } from './components'
import { Textarea } from './components/Textarea'

const OPTIONS = [
  { label: '31', value: 31 },
  { label: '32', value: 32 },
]

const data = [{}]

export const Component = () => {
  const [tabIndex, setTabIndex] = useState<string | number>(0)
  const [checked, setChecked] = useState(false)
  const [selectValue, setSelectValue] = useState(31)

  const [selectValue2, setSelectValue2] = useState('12312312')

  const toggleCheck = useCallback(() => {
    setChecked(!checked)
  }, [checked])
  return (
    <Box css={{ padding: 24 }}>
      {/* TODO:테스트할 컴포넌트를 넣어주세요 */}
      <TabContainer
        variant="hat"
        value={tabIndex}
        onTabValueChange={(value) => {
          setTabIndex(value)
        }}
      >
        <Tabs>
          <Tab value={0} label="0번 탭입니다." />
          <Tab value={1} label="1번 탭입니다." />
          <Tab value={2} label="2번 탭입니다." />
          <Tab value={3} label="3번 탭입니다." />
        </Tabs>

        <TabPanel value={0}>
          <Box css={{}}>
            <Checkbox size="sm" label="SM" checked={checked} onChange={toggleCheck} />
            <Checkbox
              size="sm"
              label="SM"
              checked={checked}
              onChange={toggleCheck}
              disabled={true}
            />
            {/* <Select
              value={selectValue}
              onChange={(value: number) => {
                setSelectValue(value)
              }}
              options={OPTIONS}
            /> */}
          </Box>
        </TabPanel>
        <TabPanel value={1}>
          <Box css={{ display: 'flex' }}>
            <Checkbox size="md" label="SM" checked={checked} onChange={toggleCheck} />
            <Checkbox
              size="md"
              label="SM"
              checked={checked}
              onChange={toggleCheck}
              disabled={true}
            />
          </Box>
        </TabPanel>
        <TabPanel value={2}>
          <Box css={{}}>
            <Checkbox size="lg" label="SM" checked={checked} onChange={toggleCheck} />
            <Checkbox
              size="lg"
              label="SM"
              checked={checked}
              onChange={toggleCheck}
              disabled={true}
            />
          </Box>
        </TabPanel>
        <TabPanel value={3}>3번 탭입니다.</TabPanel>
      </TabContainer>

      <TabContainer
        value={tabIndex}
        onTabValueChange={(value) => {
          setTabIndex(value)
        }}
      >
        <Tabs>
          <Tab value={0} label="0번 탭입니다." />
          <Tab value={1} label="1번 탭입니다." />
          <Tab value={2} label="2번 탭입니다." />
          <Tab value={3} label="3번 탭입니다." />
        </Tabs>

        <TabPanel value={0}>
          <TextInput
            regExp={/^[0-9]*$/}
            value={selectValue2}
            onChange={(value) => {
              setSelectValue2(value.target.value)
            }}
          />
          <Textarea label="123098123091280938" rows={10} size="lg" placeholder="12-0391203809" />
        </TabPanel>
        <TabPanel value={1}>1번 탭입니다.</TabPanel>
        <TabPanel value={2}>2번 탭입니다.</TabPanel>
        <TabPanel value={3}>3번 탭입니다.</TabPanel>
      </TabContainer>
    </Box>
  )
}
