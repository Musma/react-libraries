import { SVGProps } from "react";

const FillMailIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M3 3h18c.2652 0 .5196.10536.7071.29289C21.8946 3.48043 22 3.73478 22 4v16c0 .2652-.1054.5196-.2929.7071S21.2652 21 21 21H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 20.5196 2 20.2652 2 20V4c0-.26522.10536-.51957.29289-.70711C2.48043 3.10536 2.73478 3 3 3Zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001Z" /></svg>;

export default FillMailIcon;