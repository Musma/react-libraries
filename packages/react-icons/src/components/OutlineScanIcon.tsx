import { SVGProps } from "react";

const OutlineScanIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M15.3333 2H22v5.55556h-2.2222V4.22222h-4.4445V2ZM8.66667 2v2.22222H4.22222v3.33334H2V2h6.66667Zm6.66663 20v-2.2222h4.4445v-3.3334H22V22h-6.6667Zm-6.66663 0H2v-5.5556h2.22222v3.3334h4.44445V22ZM2 10.8889h20v2.2222H2v-2.2222Z" /></svg>;

export default OutlineScanIcon;