import { SVGProps } from "react";

const FillPaperIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M21 9v11.993c.0009.1313-.024.2615-.0734.3832-.0494.1217-.1223.2325-.2145.326-.0922.0935-.202.1679-.3229.219-.121.0511-.2509.0779-.3822.0788H3.993c-.26319 0-.51561-.1045-.7018-.2905-.1862-.186-.29093-.4383-.2912-.7015V2.992C3 2.455 3.447 2 3.998 2H14v6c0 .26522.1054.51957.2929.70711C14.4804 8.89464 14.7348 9 15 9h6Zm0-2h-5V2.003L21 7Z" /></svg>;

export default FillPaperIcon;