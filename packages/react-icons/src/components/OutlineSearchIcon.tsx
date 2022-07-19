import { SVGProps } from "react";

const OutlineSearchIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><circle cx={10.2833} cy={10.2833} r={6.2833} stroke={props.color || '#000'} strokeWidth={2} /><rect width={7.76886} height={1.94221} x={15.5068} y={14.1332} fill={props.color || '#000'} rx={0.971107} transform="rotate(45 15.5068 14.1332)" /></svg>;

export default OutlineSearchIcon;