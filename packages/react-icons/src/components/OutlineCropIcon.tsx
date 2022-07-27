import { SVGProps } from "react";

const OutlineCropIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M15 17v2H6c-.26522 0-.51957-.1054-.70711-.2929C5.10536 18.5196 5 18.2652 5 18V7H2V5h3V2h2v15h8Zm2 5V7H9V5h9c.2652 0 .5196.10536.7071.29289C18.8946 5.48043 19 5.73478 19 6v11h3v2h-3v3h-2Z" /></svg>;

export default OutlineCropIcon;