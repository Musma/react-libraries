import { SVGProps } from "react";

const FillLayersIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m19.6916 10.8819 1.1438.6861c.0706.0422.129.102.1696.1736.0405.0715.0618.1524.0618.2346 0 .0823-.0213.1631-.0618.2346-.0406.0716-.099.1314-.1696.1736L12 17.6857l-8.83544-5.3013c-.07057-.0422-.12898-.102-.16953-.1736-.04056-.0715-.06187-.1523-.06187-.2346 0-.0822.02131-.1631.06187-.2346.04055-.0716.09896-.1314.16953-.1736l1.1438-.6861L12 15.4971l7.6916-4.6152Zm0 4.4724 1.1438.6861c.0706.0423.129.1021.1696.1736.0405.0716.0618.1524.0618.2346 0 .0823-.0213.1631-.0618.2347-.0406.0715-.099.1313-.1696.1736l-8.3453 5.0072C12.3421 21.953 12.1727 22 12 22c-.1727 0-.3421-.047-.4901-.1359l-8.34534-5.0072c-.07057-.0423-.12898-.1021-.16953-.1736-.04056-.0716-.06187-.1524-.06187-.2347 0-.0822.02131-.163.06187-.2346.04055-.0715.09896-.1313.16953-.1736l1.1438-.6861L12 19.9695l7.6916-4.6152ZM12.4891 2.1359l8.3463 5.00722c.0706.04225.129.10206.1696.17361.0405.07154.0618.15238.0618.23462 0 .08224-.0213.16308-.0618.23463-.0406.07154-.099.13136-.1696.1736L12 13.2608 3.16456 7.95958c-.07057-.04224-.12898-.10206-.16953-.1736-.04056-.07155-.06187-.15239-.06187-.23463 0-.08224.02131-.16308.06187-.23462.04055-.07155.09896-.13136.16953-.17361L11.5099 2.1359C11.6579 2.04698 11.8273 2 12 2c.1727 0 .3421.04698.4901.1359h-.001Z" /></svg>;

export default FillLayersIcon;