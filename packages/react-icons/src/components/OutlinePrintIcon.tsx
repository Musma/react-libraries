import { SVGProps } from "react";

const OutlinePrintIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M6 19H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 18.5196 2 18.2652 2 18V8c0-.26522.10536-.51957.29289-.70711C2.48043 7.10536 2.73478 7 3 7h3V3c0-.26522.10536-.51957.29289-.70711C6.48043 2.10536 6.73478 2 7 2h10c.2652 0 .5196.10536.7071.29289C17.8946 2.48043 18 2.73478 18 3v4h3c.2652 0 .5196.10536.7071.29289C21.8946 7.48043 22 7.73478 22 8v10c0 .2652-.1054.5196-.2929.7071S21.2652 19 21 19h-3v2c0 .2652-.1054.5196-.2929.7071S17.2652 22 17 22H7c-.26522 0-.51957-.1054-.70711-.2929C6.10536 21.5196 6 21.2652 6 21v-2Zm0-2v-1c0-.2652.10536-.5196.29289-.7071C6.48043 15.1054 6.73478 15 7 15h10c.2652 0 .5196.1054.7071.2929S18 15.7348 18 16v1h2V9H4v8h2ZM8 4v3h8V4H8Zm0 13v3h8v-3H8Zm-3-7h3v2H5v-2Z" /></svg>;

export default OutlinePrintIcon;