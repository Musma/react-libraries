import { SVGProps } from "react";

const FillPowerIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M11 2.02499V11.975h2V2.02499c5.053.501 9 4.765 9 9.95001 0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.18501 3.947-9.44901 9-9.95001Z" /></svg>;

export default FillPowerIcon;