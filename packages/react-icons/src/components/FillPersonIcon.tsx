import { SVGProps } from "react";

const FillPersonIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 12c2.7625 0 5-2.2375 5-5s-2.2375-5-5-5-5 2.2375-5 5 2.2375 5 5 5Zm0 2.5c-3.3375 0-10 1.675-10 5V22h20v-2.5c0-3.325-6.6625-5-10-5Z" /></svg>;

export default FillPersonIcon;