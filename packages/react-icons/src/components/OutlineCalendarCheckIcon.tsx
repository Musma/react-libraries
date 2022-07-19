import { SVGProps } from "react";

const OutlineCalendarCheckIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M9 2v2h6V2h2v2h4c.2652 0 .5196.10536.7071.29289C21.8946 4.48043 22 4.73478 22 5v16c0 .2652-.1054.5196-.2929.7071S21.2652 22 21 22H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 21.5196 2 21.2652 2 21V5c0-.26522.10536-.51957.29289-.70711C2.48043 4.10536 2.73478 4 3 4h4V2h2Zm11 9H4v9h16v-9Zm-4.964 1.136 1.414 1.414-4.95 4.95-3.536-3.536L9.38 13.55l2.121 2.122 3.536-3.536h-.001ZM7 6H4v3h16V6h-3v1h-2V6H9v1H7V6Z" /></svg>;

export default OutlineCalendarCheckIcon;