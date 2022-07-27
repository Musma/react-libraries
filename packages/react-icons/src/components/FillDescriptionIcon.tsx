import { SVGProps } from "react";

const FillDescriptionIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M20 22H4c-.26522 0-.51957-.1054-.70711-.2929C3.10536 21.5196 3 21.2652 3 21V3c0-.26522.10536-.51957.29289-.70711C3.48043 2.10536 3.73478 2 4 2h16c.2652 0 .5196.10536.7071.29289C20.8946 2.48043 21 2.73478 21 3v18c0 .2652-.1054.5196-.2929.7071S20.2652 22 20 22ZM8 9v2h8V9H8Zm0 4v2h8v-2H8Z" /></svg>;

export default FillDescriptionIcon;