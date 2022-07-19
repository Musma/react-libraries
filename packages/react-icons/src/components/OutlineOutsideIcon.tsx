import { SVGProps } from "react";

const OutlineOutsideIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M3.5 22c-.26522 0-.51957-.1054-.70711-.2929C2.60536 21.5196 2.5 21.2652 2.5 21V3c0-.26522.10536-.51957.29289-.70711C2.98043 2.10536 3.23478 2 3.5 2h14c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711v3h-2V4h-12v16h12v-2h2v3c0 .2652-.1054.5196-.2929.7071S17.7652 22 17.5 22h-14Zm13-6v-3h-7v-2h7V8l5 4-5 4Z" /></svg>;

export default OutlineOutsideIcon;