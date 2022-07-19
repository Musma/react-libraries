import { SVGProps } from "react";

const OutlineHomeIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path stroke={props.color || '#000'} strokeWidth={2} d="M10 13H9v6H6v-8H4.60596L12 4.34536 19.394 11H18v8h-3v-6h-5Z" /></svg>;

export default OutlineHomeIcon;