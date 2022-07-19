import { SVGProps } from "react";

const FillBatteryIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2.95238 5.33336H18.1905c.2526 0 .4948.10034.6734.27894.1786.17861.279.42085.279.67344V17.7143c0 .2526-.1004.4948-.279.6734-.1786.1787-.4208.279-.6734.279H2.95238c-.25259 0-.49483-.1003-.67343-.279C2.10034 18.2091 2 17.9669 2 17.7143V6.28574c0-.25259.10034-.49483.27895-.67344.1786-.1786.42084-.27894.67343-.27894ZM20.0952 9.14288H22v5.71432h-1.9048V9.14288Z" /></svg>;

export default FillBatteryIcon;