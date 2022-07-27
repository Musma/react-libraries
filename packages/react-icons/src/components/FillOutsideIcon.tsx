import { SVGProps } from "react";

const FillOutsideIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M5 22c-.26522 0-.51957-.1054-.70711-.2929C4.10536 21.5196 4 21.2652 4 21V3c0-.26522.10536-.51957.29289-.70711C4.48043 2.10536 4.73478 2 5 2h14c.2652 0 .5196.10536.7071.29289C19.8946 2.48043 20 2.73478 20 3v18c0 .2652-.1054.5196-.2929.7071S19.2652 22 19 22H5Zm10-6 5-4-5-4v3H9v2h6v3Z" /></svg>;

export default FillOutsideIcon;