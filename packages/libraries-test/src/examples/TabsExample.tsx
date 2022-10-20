import { Tab, TabContainer, TabPanel, Tabs } from '@musma/react-component'

export const TabsExample = () => {
  return (
    <div>
      <TabContainer defaultTab={1} variant="rect">
        <Tabs>
          <Tab label="one two" value={1} />
          <Tab label="two" value={2} />
          <Tab label="three" value={3} />
        </Tabs>
        <TabPanel value={1}>Item one panel</TabPanel>
        <TabPanel value={2}>Item two panel</TabPanel>
        <TabPanel value={3}>Item three panel</TabPanel>
      </TabContainer>
    </div>
  )
}
