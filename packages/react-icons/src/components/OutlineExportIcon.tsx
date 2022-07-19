import { SVGProps } from "react";

const OutlineExportIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M3 19.5h18v2H3v-2Zm10-9v8h-2v-8H4l8-8 8 8h-7Z" /></svg>;

export default OutlineExportIcon;