import { SVGProps } from "react";

const OutlinePinIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path stroke={props.color || '#000'} strokeWidth={2} d="M12 20.4634c-.0983-.1184-.2045-.2475-.3173-.3865-.6434-.7928-1.4995-1.9014-2.35374-3.1675-.85611-1.2688-1.6979-2.6777-2.32261-4.0722C6.37577 11.4297 6 10.1102 6 9c0-3.31772 2.68228-6 6-6 3.3177 0 6 2.68228 6 6 0 1.1102-.3758 2.4297-1.0064 3.8372-.6247 1.3945-1.4664 2.8034-2.3226 4.0722-.8542 1.2661-1.7103 2.3747-2.3537 3.1675-.1128.139-.219.2681-.3173.3865Z" /><circle cx={12} cy={9.09686} r={1.7} stroke={props.color || '#000'} strokeWidth={1.6} /></svg>;

export default OutlinePinIcon;