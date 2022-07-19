import { SVGProps } from "react";

const OutlineColorTextIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2.47619 18.1905H21.5238V22H2.47619v-3.8095ZM5.8 15.3333h2.30476l1.20952-3.4095h5.38092l1.2 3.4095H18.2L13.1905 2h-2.381L5.8 15.3333Zm4.2095-5.34282 1.9334-5.51429h.1142l1.9334 5.51429h-3.981Z" /></svg>;

export default OutlineColorTextIcon;