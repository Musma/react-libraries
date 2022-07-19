import { SVGProps } from "react";

const FillLocationIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m12.9091 2 .0009 2.78364c1.602.20253 3.0911.93221 4.2329 2.0741 1.1417 1.14189 1.8712 2.63113 2.0735 4.23316H22v1.8182l-2.7836.0009c-.2025 1.6019-.9321 3.0909-2.0738 4.2326-1.1417 1.1417-2.6307 1.8713-4.2326 2.0738L12.9091 22h-1.8182v-2.7836c-1.60203-.2023-3.09127-.9318-4.23316-2.0735-1.14189-1.1418-1.87157-2.6309-2.0741-4.2329L2 12.9091v-1.8182h2.78364c.20235-1.60217.93194-3.0915 2.07385-4.23341 1.14191-1.14191 2.63124-1.8715 4.23341-2.07385V2h1.8182ZM12 10.1818c-.4822 0-.9447.1916-1.2856.5326-.341.3409-.5326.8034-.5326 1.2856 0 .4822.1916.9447.5326 1.2856.3409.341.8034.5326 1.2856.5326.4822 0 .9447-.1916 1.2856-.5326.341-.3409.5326-.8034.5326-1.2856 0-.4822-.1916-.9447-.5326-1.2856-.3409-.341-.8034-.5326-1.2856-.5326Z" /></svg>;

export default FillLocationIcon;