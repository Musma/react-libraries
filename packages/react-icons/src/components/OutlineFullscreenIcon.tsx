import { SVGProps } from "react";

const OutlineFullscreenIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M16 3h6v6h-2V5h-4V3ZM2 3h6v2H4v4H2V3Zm18 16v-4h2v6h-6v-2h4ZM4 19h4v2H2v-6h2v4Z" /></svg>;

export default OutlineFullscreenIcon;