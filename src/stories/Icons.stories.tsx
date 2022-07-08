import * as ReactIcons from '@musma/react-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const AllIcons = Object.entries(ReactIcons).map((icon) => ({
  name: icon[0],
  component: icon[1],
}))

const IconComponent = () => {
  return (
    <div className="grid-cols-icons grid auto-cols-max auto-rows-auto gap-4">
      {AllIcons.map((icon, index) => (
        <div key={index} className="flex flex-col justify-center text-center ">
          <CopyToClipboard
            text={`import { ${icon.name} } from '@musma/react-icons'`}
            onCopy={() => {
              toast(`Copied '${icon.name}'' to clipboard`, {
                position: 'top-center',
                type: 'success',
                autoClose: 1000 * 3,
              })
            }}
          >
            <div className="cursor-pointer text-[12px] text-black">
              <div className="border-1 mb-4 flex min-h-[64px] items-center justify-center rounded-md border bg-white shadow-lg">
                <icon.component />
              </div>
              {icon.name}
            </div>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  )
}

export default {
  title: 'Icons/All',
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>

const Template: ComponentStory<typeof IconComponent> = () => <IconComponent />

export const All = Template.bind({})
