import { SVGProps } from "react";

const FillDescriptionsIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M7 5.99998v-3c0-.26521.10536-.51957.29289-.7071.18754-.18754.44189-.2929.70711-.2929h12c.2652 0 .5196.10536.7071.2929.1875.18753.2929.44189.2929.7071V17c0 .2652-.1054.5196-.2929.7071S20.2652 18 20 18h-3v3c0 .552-.45 1-1.007 1H4.007c-.13187.0008-.2626-.0245-.38468-.0744-.12207-.0499-.23309-.1234-.32666-.2163-.09358-.0929-.16787-.2034-.21861-.3252C3.02632 21.2624 3.00013 21.1319 3 21l.003-14.00002c0-.552.45-1 1.007-1H7Zm2 0h8V16h2V3.99998H9v2ZM7 11v2h6v-2H7Zm0 4v2h6v-2H7Z" /></svg>;

export default FillDescriptionsIcon;