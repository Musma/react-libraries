import { SVGProps } from "react";

const OutlineDeleteBoxIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M4 3h16c.2652 0 .5196.10536.7071.29289C20.8946 3.48043 21 3.73478 21 4v16c0 .2652-.1054.5196-.2929.7071S20.2652 21 20 21H4c-.26522 0-.51957-.1054-.70711-.2929C3.10536 20.5196 3 20.2652 3 20V4c0-.26522.10536-.51957.29289-.70711C3.48043 3.10536 3.73478 3 4 3Zm1 2v14h14V5H5Zm6 6h6v2H7v-2h4Z" /></svg>;

export default OutlineDeleteBoxIcon;