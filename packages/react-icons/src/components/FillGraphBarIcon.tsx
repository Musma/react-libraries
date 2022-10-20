import { SVGProps } from "react";
const FillGraphBarIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2 13h6v8H2v-8ZM9 3h6v18H9V3Zm7 5h6v13h-6V8Z" /></svg>;
export default FillGraphBarIcon;