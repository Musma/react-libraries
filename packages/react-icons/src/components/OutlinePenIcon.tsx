import { SVGProps } from "react";

const OutlinePenIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m16.1652 9.40845-1.5737-1.57366L4.22583 18.2005v1.5737H5.7995L16.1652 9.40845Zm1.5737-1.57366 1.5736-1.57367-1.5736-1.57366-1.5737 1.57366 1.5737 1.57367ZM6.721 22H2v-4.7221L16.952 2.32585C17.1607 2.11721 17.4438 2 17.7389 2c.2951 0 .5781.11721.7868.32585l3.1485 3.14844c.2086.2087.3258.49173.3258.78683 0 .29511-.1172.57813-.3258.78684L6.72211 22H6.721Z" /></svg>;

export default OutlinePenIcon;