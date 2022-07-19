import { SVGProps } from "react";

const OutlineReplyIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m12 17.9999-7.5-6L12 5.99994v3.75c4.1422 0 7.5 3.35776 7.5 7.49996 0 .2048-.0075.4073-.024.6075-1.0972-2.0805-3.2475-3.5182-5.7413-3.6037l-.2347-.0038H12v3.75Zm-1.5-5.25h3.0255l.2602.0053c.9638.0322 1.893.2325 2.757.5745-1.1002-1.2735-2.7277-2.0798-4.5427-2.0798h-1.5V9.12069L6.9015 11.9999 10.5 14.8792v-2.1293Z" /></svg>;

export default OutlineReplyIcon;