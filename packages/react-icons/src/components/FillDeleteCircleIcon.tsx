import { SVGProps } from "react";

const FillDeleteCircleIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-5-9.0211v-1.9773h10v1.9773H7Z" clipRule="evenodd" /></svg>;

export default FillDeleteCircleIcon;