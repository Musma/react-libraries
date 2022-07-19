import { SVGProps } from "react";

const FillScanIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M15.3333 2.00006H22v6.66667h-6.6667V2.00006Zm-6.66663 0v6.66667H2V2.00006h6.66667ZM15.3333 22.0001v-6.6667H22v6.6667h-6.6667Zm-6.66663 0H2v-6.6667h6.66667v6.6667ZM2 10.889h20v2.2222H2V10.889Z" /></svg>;

export default FillScanIcon;