import { SVGProps } from "react";

const FillPictureIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M2 2h2.22222v2.22222H2V2Zm4.44444 0h2.22223v2.22222H6.44444V2Zm4.44446 0h2.2222v2.22222h-2.2222V2Zm4.4444 0h2.2223v2.22222h-2.2223V2Zm4.4445 0H22v2.22222h-2.2222V2Zm0 4.44444H22v2.22223h-2.2222V6.44444ZM2 19.7778h2.22222V22H2v-2.2222Zm0-4.4445h2.22222v2.2223H2v-2.2223Zm0-4.4444h2.22222v2.2222H2v-2.2222Zm0-4.44446h2.22222v2.22223H2V6.44444Zm8.5189 4.44446L11.67 9.16111c.1015-.15213.239-.27685.4002-.3631.1613-.08626.3414-.13137.5242-.13134H15.85c.1829-.00003.3629.04508.5242.13134.1613.08625.2987.21097.4002.3631l1.1512 1.72779h2.9633c.2947 0 .5773.1171.7857.3254.2083.2084.3254.491.3254.7857v8.8889c0 .2947-.1171.5773-.3254.7857-.2084.2083-.491.3254-.7857.3254H7.55556c-.29469 0-.5773-.1171-.78568-.3254-.20837-.2084-.32544-.491-.32544-.7857V12c0-.2947.11707-.5773.32544-.7857.20838-.2083.49099-.3254.78568-.3254h2.96334Zm3.7033 7.7778c.5894 0 1.1546-.2342 1.5714-.6509.4167-.4168.6508-.982.6508-1.5714 0-.5893-.2341-1.1546-.6508-1.5713-.4168-.4168-.982-.6509-1.5714-.6509-.5893 0-1.1546.2341-1.5713.6509-.4168.4167-.6509.982-.6509 1.5713 0 .5894.2341 1.1546.6509 1.5714.4167.4167.982.6509 1.5713.6509Z" /></svg>;

export default FillPictureIcon;