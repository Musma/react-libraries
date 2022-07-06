import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useCallback, useState } from 'react'

import { ToggleButton as _ToggleButton } from '../components/ToggleButton'

export default {
  title: 'Components/ToggleButton',
  component: _ToggleButton,
} as ComponentMeta<typeof _ToggleButton>

const Template: ComponentStory<typeof _ToggleButton> = (args) => <_ToggleButton {...args} />

export const ToggleButton = Template.bind({})
ToggleButton.args = {
  disabled: false,
}

// export const Example: ComponentStory<typeof _ToggleButton> = (args) => {
//   const [checked, setChecked] = useState(false)
//   const onChagne = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked(e.target.checked)
//     console.log('changed', e.target.value, e.target.checked)
//   }, [])
//   return <_ToggleButton checked={checked} onChange={onChagne} {...args} />
// }
