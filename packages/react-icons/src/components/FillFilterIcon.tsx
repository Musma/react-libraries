import { SVGProps } from "react";

const FillFilterIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M9.89471 13.5789 3.57892 4.10526V2H20.421v2.10526l-6.3158 9.47364v6.3158L9.89471 22v-8.4211Z" /></svg>;

export default FillFilterIcon;