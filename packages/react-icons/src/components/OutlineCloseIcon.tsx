import { SVGProps } from "react";

const OutlineCloseIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M18.465 7.15127 13.6162 12l4.8488 4.8487-1.6163 1.6163L12 13.6162 7.15127 18.465l-1.61624-1.6163L10.3838 12 5.53503 7.15127l1.61624-1.61625L12 10.3838l4.8487-4.84878 1.6163 1.61625Z" /></svg>;

export default OutlineCloseIcon;