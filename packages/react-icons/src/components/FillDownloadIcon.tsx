import { SVGProps } from "react";

const FillDownloadIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M4 19h16v-7h2v8c0 .2652-.1054.5196-.2929.7071S21.2652 21 21 21H3c-.26522 0-.51957-.1054-.70711-.2929C2.10536 20.5196 2 20.2652 2 20v-8h2v7ZM14 9h5l-7 7-7-7h5V3h4v6Z" /></svg>;

export default FillDownloadIcon;