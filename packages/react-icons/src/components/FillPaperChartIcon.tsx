import { SVGProps } from "react";

const FillPaperChartIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m16 2 5 5v14.008c-.0003.2632-.105.5155-.2912.7015-.1862.186-.4386.2905-.7018.2905H3.993c-.26262-.0018-.51398-.1069-.69978-.2925-.1858-.1856-.29113-.4369-.29322-.6995V2.992C3 2.444 3.445 2 3.993 2H16Zm-5 5v10h2V7h-2Zm4 4v6h2v-6h-2Zm-8 2v4h2v-4H7Z" /></svg>;

export default FillPaperChartIcon;