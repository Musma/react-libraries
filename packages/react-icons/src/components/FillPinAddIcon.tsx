import { SVGProps } from "react";

const FillPinAddIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2Z" /></svg>;

export default FillPinAddIcon;