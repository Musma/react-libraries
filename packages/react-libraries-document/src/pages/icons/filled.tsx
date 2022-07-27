import * as ReactIcons from '@musma/react-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const AllIcons = Object.entries(ReactIcons)
  .map((icon) => ({
    name: icon[0],
    component: icon[1],
  }))
  .filter((icon) => icon.name.startsWith('Fill'))

const icons = () => {
  return (
    <div className="py-10">
      <div className="grid-cols-icons grid auto-cols-max auto-rows-auto gap-4">
        {AllIcons.map((icon, index) => (
          <div key={index} className="flex flex-col justify-center text-center">
            <CopyToClipboard
              text={`import { ${icon.name} } from '@musma/react-icons'`}
              onCopy={() => {
                toast(`Copied '${icon.name}' to clipboard`, {
                  position: 'top-center',
                  type: 'success',
                  autoClose: 1000 * 3,
                })
              }}
            >
              <div className="cursor-pointer text-[14px] text-black">
                <div className="border-1 mb-4 flex min-h-[64px] items-center justify-center rounded-md border bg-white shadow-lg">
                  <icon.component />
                </div>
                {icon.name}
              </div>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default icons