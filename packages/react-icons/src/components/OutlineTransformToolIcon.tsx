import { SVGProps } from "react";

const OutlineTransformToolIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8Zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2ZM4 4v2h2V4H4Zm0 14v2h2v-2H4ZM18 4v2h2V4h-2Zm0 14v2h2v-2h-2Z" /></svg>;

export default OutlineTransformToolIcon;