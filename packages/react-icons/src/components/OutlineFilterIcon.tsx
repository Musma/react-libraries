import { SVGProps } from "react";

const OutlineFilterIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M14.1054 13.5789v6.3158L9.89486 22v-8.4211L3.57907 4.10526V2H20.4212v2.10526l-6.3158 9.47364ZM6.1096 4.10526l5.8905 8.83584 5.8906-8.83584H6.1096Z" /></svg>;

export default OutlineFilterIcon;