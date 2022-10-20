import { SVGProps } from "react";
const FillErrorIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m12.8227 3.68719 9.05 15.67551c.0834.1444.1273.3082.1273.475s-.0439.3306-.1273.475c-.0834.1444-.2033.2644-.3477.3478-.1444.0833-.3082.1272-.475.1272H2.95001c-.16677 0-.33059-.0439-.47501-.1272-.14442-.0834-.26435-.2034-.34773-.3478C2.04389 20.1683 2 20.0045 2 19.8377s.0439-.3306.12728-.475L11.1773 3.68719c.0834-.14441.2033-.26433.3477-.3477.1444-.08338.3082-.12727.475-.12727s.3306.04389.475.12727c.1444.08337.2643.20329.3477.3477ZM11.05 16.0376v1.9001h1.9v-1.9001h-1.9Zm0-6.65022v4.75012h1.9V9.38738h-1.9Z" /></svg>;
export default FillErrorIcon;