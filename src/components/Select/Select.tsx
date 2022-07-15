import classNames from 'classnames'
import { useMemo } from 'react'

export interface SelectOption<T> {
  label: string
  value: T
}

interface SelectProps<T> {
  label?: string
  value: T
  options: SelectOption<T>[]
  onChange: (value: T) => void
  id?: string
}

export const Select = <T,>({ value, label, options, onChange }: SelectProps<T>) => {
  const selectedItem = useMemo(() => {
    if (value) {
      const item = options.find((it) => it.value === value)
      return item
    }
  }, [value, options])

  console.log(selectedItem?.value)

  return (
    <div className="inline-flex flex-col">
      {label && <label>{label}</label>}
      <div className="group relative" tabIndex={-1}>
        <input
          className="rounded-[4px] border border-[#BAC7D5] outline-none focus-within:ring-1"
          value={value as unknown as string}
          readOnly={true}
        />
        <div className="bg-black custom-scrollbar absolute top-[calc(100%_+_8px)] hidden max-h-[158px] w-full flex-col overflow-y-auto rounded-[4px] border border-[#BAC7D5] p-1 outline-none group-focus-within:flex">
          {options.map((option, index) => (
            <div
              key={index}
              className={classNames(
                selectedItem?.value === option.value ? 'text-[#036DB7]' : 'text-[#242E40]',
                `mb-1 cursor-pointer text-[14px] last-of-type:mb-0 hover:text-[#036DB7]`,
              )}
              role="option"
              onClick={() => {
                onChange(option.value)
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
