import { SVGProps } from "react";

const FillCropIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M19 17.0001h3v2h-3v3h-2v-3H6c-.26522 0-.51957-.1054-.70711-.2929C5.10536 18.5196 5 18.2653 5 18.0001V7.00006H2v-2h3v-3h2v3h11c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711V17.0001Z" /></svg>;

export default FillCropIcon;