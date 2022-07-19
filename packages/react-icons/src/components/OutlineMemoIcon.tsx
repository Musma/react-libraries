import { SVGProps } from "react";

const OutlineMemoIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m16.5577 2.95238-2.1164 2.1164H4.1164V19.8836h14.8148V9.55873l2.1164-2.1164V20.9418c0 .2807-.1115.5498-.3099.7483-.1985.1984-.4676.3099-.7483.3099H3.0582c-.28065 0-.54981-.1115-.74826-.3099C2.11149 21.4916 2 21.2225 2 20.9418V4.01058c0-.28065.11149-.54981.30994-.74826.19845-.19845.46761-.30994.74826-.30994h13.4995ZM20.5026 2 22 3.49841l-9.727 9.72699-1.4942.0032-.0021-1.4995L20.5026 2Z" /></svg>;

export default OutlineMemoIcon;