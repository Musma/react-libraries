export const Footer = () => {
  return (
    <footer className="bg-[#060b11]">
      <div className="container mx-auto flex flex-col items-center py-10 text-[#ffffff7a]">
        <div className="flex"></div>

        <div>{`© YoungSu Kim • ${new Date().getFullYear()}`}</div>
      </div>
    </footer>
  )
}
