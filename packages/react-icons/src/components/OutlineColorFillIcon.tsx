import { SVGProps } from "react";

const OutlineColorFillIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M16.1333 9.45 8.68333 2l-1.175 1.175 1.98334 1.98333L5.2 9.45c-.49167.49167-.49167 1.2833 0 1.7667L9.78333 15.8c.24167.2417.56667.3667.88337.3667.3166 0 .6416-.125.8833-.3667l4.5833-4.5833c.4917-.4834.4917-1.27503 0-1.7667Zm-9.4583.8833 3.9917-3.99163 3.9916 3.99163H6.675Zm11.4917 1.25S16.5 13.3917 16.5 14.5c0 .9167.75 1.6667 1.6667 1.6667.9166 0 1.6666-.75 1.6666-1.6667 0-1.1083-1.6666-2.9167-1.6666-2.9167ZM4 18.6667h16.6667V22H4v-3.3333Z" /></svg>;

export default OutlineColorFillIcon;