interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button className="h-full w-10 bg-black" {...rest}>
      {label}
    </button>
  )
}
