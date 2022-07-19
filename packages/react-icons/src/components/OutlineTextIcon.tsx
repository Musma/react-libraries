import { SVGProps } from "react";

const OutlineTextIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M4.22222 4.22222V19.7778H19.7778V4.22222H4.22222ZM3.11111 2H20.8889c.2947 0 .5773.11706.7857.32544.2083.20837.3254.49099.3254.78567V20.8889c0 .2947-.1171.5773-.3254.7857-.2084.2083-.491.3254-.7857.3254H3.11111c-.29468 0-.5773-.1171-.78567-.3254C2.11706 21.4662 2 21.1836 2 20.8889V3.11111c0-.29468.11706-.5773.32544-.78567C2.53381 2.11706 2.81643 2 3.11111 2Zm9.99999 7.77778v7.77782h-2.2222V9.77778H6.44444V7.55556H17.5556v2.22222h-4.4445Z" /></svg>;

export default OutlineTextIcon;