import { SVGProps } from "react";

const FillSearchIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} fillRule="evenodd" d="M10.2833 17.5666c1.6663 0 3.2019-.5596 4.4292-1.5011.0316.0449.0675.0876.1076.1278l4.1201 4.12c.3792.3793.9941.3793 1.3733 0 .3793-.3792.3793-.9941 0-1.3733l-4.12-4.1201c-.0402-.0401-.0829-.076-.1278-.1076.9414-1.2273 1.5009-2.7628 1.5009-4.429C17.5666 6.26085 14.3058 3 10.2833 3 6.26085 3 3 6.26085 3 10.2833c0 4.0225 3.26085 7.2833 7.2833 7.2833Z" clipRule="evenodd" /></svg>;

export default FillSearchIcon;