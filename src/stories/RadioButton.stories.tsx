import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RadioButton as _RadioButton, Props } from '../components/RadioButton'

export default {
  title: 'Components/RadioButton',
  component: _RadioButton,
} as ComponentMeta<typeof _RadioButton>

export const Example: ComponentStory<typeof _RadioButton> = ({
  label = 'Jason',
  disabled,
  ...rest
}: Props) => {
  return (
    <div className="grid gap-y-2">
      <_RadioButton name="developer" label={label} disabled={disabled} {...rest} />
      <_RadioButton name="developer" label="Justin" {...rest} />
      <_RadioButton name="developer" label="Jelly" {...rest} />
    </div>
  )
}

const Template: ComponentStory<typeof _RadioButton> = (args) => <_RadioButton {...args} />
export const RadioButton = Template.bind({})
RadioButton.args = {}
