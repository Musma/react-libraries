import { SVGProps } from "react";

const OutlineCompassIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2c2.1217 0 4.1566-.8429 5.6569-2.3431C19.1571 16.1566 20 14.1217 20 12c0-2.12173-.8429-4.15656-2.3431-5.65685C16.1566 4.84285 14.1217 4 12 4c-2.12173 0-4.15656.84285-5.65685 2.34315C4.84285 7.84344 4 9.87827 4 12c0 2.1217.84285 4.1566 2.34315 5.6569C7.84344 19.1571 9.87827 20 12 20Zm3.5-11.5-2 5-5 2 2-5 5-2Z" /></svg>;

export default OutlineCompassIcon;