import { SVGProps } from "react";

const FillEmergencyIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M4.00001 20v-6c0-2.1217.84286-4.15656 2.34315-5.65685C7.84345 6.84285 9.87828 6 12 6c2.1217 0 4.1566.84285 5.6569 2.34315C19.1572 9.84344 20 11.8783 20 14v6h1v2H3.00001v-2h1Zm2-6h2c0-1.0609.42143-2.0783 1.17158-2.8284C9.92173 10.4214 10.9391 10 12 10V8c-1.5913 0-3.11741.63214-4.24263 1.75736C6.63216 10.8826 6.00001 12.4087 6.00001 14ZM11 2h2v3h-2V2Zm8.778 2.808 1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121ZM2.80801 6.222l1.414-1.414 2.121 2.12-1.413 1.416-2.122-2.122Z" /></svg>;

export default FillEmergencyIcon;