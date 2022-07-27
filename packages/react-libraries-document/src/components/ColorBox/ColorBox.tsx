interface Color {
  name: string
  rgb: string
}

interface ColorBoxProps {
  colors: Color[]
}

export const ColorBox = ({ colors }: ColorBoxProps) => {
  return (
    <div className="not-prose flex gap-6 rounded border p-4">
      {colors.map((color) => (
        <div key={color.rgb}>
          <div className="h-20 w-20 rounded" style={{ backgroundColor: color.rgb }} />
          <div className="flex flex-col items-center">
            <label className="text-black">{color.name}</label>
            <label className="text-[#667085]">{color.rgb}</label>
          </div>
        </div>
      ))}
    </div>
  )
}
