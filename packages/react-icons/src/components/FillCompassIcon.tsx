import { SVGProps } from "react";
const FillCompassIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm3.5-13.5-5 2-2 5 5-2 2-5Z" /></svg>;
export default FillCompassIcon;