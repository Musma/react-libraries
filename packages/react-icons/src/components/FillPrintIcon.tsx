import { SVGProps } from "react";

const FillPrintIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M7 17h10v5H7v-5Zm12 3v-5H5v5H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 19.5196 2 19.2652 2 19V9c0-.26522.10536-.51957.29289-.70711C2.48043 8.10536 2.73478 8 3 8h18c.2652 0 .5196.10536.7071.29289C21.8946 8.48043 22 8.73478 22 9v10c0 .2652-.1054.5196-.2929.7071S21.2652 20 21 20h-2ZM5 10v2h3v-2H5Zm2-8h10c.2652 0 .5196.10536.7071.29289C17.8946 2.48043 18 2.73478 18 3v3H6V3c0-.26522.10536-.51957.29289-.70711C6.48043 2.10536 6.73478 2 7 2Z" /></svg>;

export default FillPrintIcon;