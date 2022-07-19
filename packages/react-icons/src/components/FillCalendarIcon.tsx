import { SVGProps } from "react";

const FillCalendarIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2 12h20v9c0 .2652-.1054.5196-.2929.7071S21.2652 22 21 22H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 21.5196 2 21.2652 2 21v-9Zm15-8h4c.2652 0 .5196.10536.7071.29289C21.8946 4.48043 22 4.73478 22 5v5H2V5c0-.26522.10536-.51957.29289-.70711C2.48043 4.10536 2.73478 4 3 4h4V2h2v2h6V2h2v2Z" /></svg>;

export default FillCalendarIcon;