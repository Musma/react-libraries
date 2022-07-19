import { SVGProps } from "react";

const OutlinePersonIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 4.375c1.45 0 2.625 1.175 2.625 2.625S13.45 9.625 12 9.625 9.375 8.45 9.375 7 10.55 4.375 12 4.375Zm0 11.25c3.7125 0 7.625 1.825 7.625 2.625v1.375H4.375V18.25c0-.8 3.9125-2.625 7.625-2.625ZM12 2C9.2375 2 7 4.2375 7 7s2.2375 5 5 5 5-2.2375 5-5-2.2375-5-5-5Zm0 11.25c-3.3375 0-10 1.675-10 5V22h20v-3.75c0-3.325-6.6625-5-10-5Z" /></svg>;

export default OutlinePersonIcon;