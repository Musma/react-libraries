import { SVGProps } from "react";

const OutlineGraphIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><rect width={16} height={16} x={4.00012} y={4} stroke={props.color || '#000'} strokeWidth={2} rx={1} /><path fill={props.color || '#000'} d="M7.00195 10.0016h2v7h-2zM11 6.99841h2v10.0032h-2zm3.998 6.00749h2v3.99572h-2z" /></svg>;

export default OutlineGraphIcon;