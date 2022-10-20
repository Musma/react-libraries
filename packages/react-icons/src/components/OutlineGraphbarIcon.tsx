import { SVGProps } from "react";
const OutlineGraphbarIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2 13h6v8H2v-8Zm14-5h6v13h-6V8ZM9 3h6v18H9V3ZM4 15v4h2v-4H4Zm7-10v14h2V5h-2Zm7 5v9h2v-9h-2Z" /></svg>;
export default OutlineGraphbarIcon;