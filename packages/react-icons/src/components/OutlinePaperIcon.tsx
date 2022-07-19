import { SVGProps } from "react";

const OutlinePaperIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M21 8v12.993c.0009.1313-.0241.2615-.0735.3832-.0494.1217-.1223.2325-.2145.326-.0922.0935-.2019.1679-.3229.219-.121.0511-.2508.0779-.3821.0788H3.99297c-.26319 0-.51561-.1045-.7018-.2905-.1862-.186-.29094-.4383-.2912-.7015V2.992c0-.537.449-.992 1.002-.992H14.997L21 8Zm-2 1h-5V4H4.99997v16H19V9Z" /></svg>;

export default OutlinePaperIcon;