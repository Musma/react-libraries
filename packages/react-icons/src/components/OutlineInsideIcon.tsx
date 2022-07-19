import { SVGProps } from "react";

const OutlineInsideIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M5 15h2v5h12V4H7v5H5V3c0-.26522.10536-.51957.29289-.70711C5.48043 2.10536 5.73478 2 6 2h14c.2652 0 .5196.10536.7071.29289C20.8946 2.48043 21 2.73478 21 3v18c0 .2652-.1054.5196-.2929.7071S20.2652 22 20 22H6c-.26522 0-.51957-.1054-.70711-.2929C5.10536 21.5196 5 21.2652 5 21v-6Zm6-4V8l5 4-5 4v-3H3v-2h8Z" /></svg>;

export default OutlineInsideIcon;