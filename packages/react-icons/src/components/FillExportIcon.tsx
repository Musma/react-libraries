import { SVGProps } from "react";

const FillExportIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M4 19.5h16v-7h2v8c0 .2652-.1054.5196-.2929.7071S21.2652 21.5 21 21.5H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 21.0196 2 20.7652 2 20.5v-8h2v7Zm10-10v6h-4v-6H5l7-7 7 7h-5Z" /></svg>;

export default FillExportIcon;