import { SVGProps } from "react";

const FillTransformToolIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2 2h5v5H2V2Zm0 15h5v5H2v-5ZM17 2h5v5h-5V2Zm0 15h5v5h-5v-5ZM8 4h8v2H8V4ZM4 8h2v8H4V8Zm14 0h2v8h-2V8ZM8 18h8v2H8v-2Z" /></svg>;

export default FillTransformToolIcon;