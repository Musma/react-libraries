import { SVGProps } from "react";

const FillFlagIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M3 2.5h9.382c.1857.0001.3676.05188.5255.14955.1579.09767.2855.23737.3685.40345L14 4.5h6c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711v11c0 .2652-.1054.5196-.2929.7071S20.2652 17.5 20 17.5h-6.382c-.1857-.0001-.3676-.0519-.5255-.1496-.1579-.0976-.2855-.2373-.3685-.4034L12 15.5H5v6H3v-19Z" /></svg>;

export default FillFlagIcon;