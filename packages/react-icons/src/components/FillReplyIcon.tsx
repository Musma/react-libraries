import { SVGProps } from "react";

const FillReplyIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m12 17.9999-7.5-6L12 5.99994v3.75c4.1422 0 7.5 3.35776 7.5 7.49996 0 .2048-.0075.4073-.024.6075-1.131-2.145-3.3825-3.6075-5.976-3.6075H12v3.75Z" /></svg>;

export default FillReplyIcon;