import { SVGProps } from "react";
const FillRockIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M19 10h1c.2652 0 .5196.1054.7071.2929S21 10.7348 21 11v10c0 .2652-.1054.5196-.2929.7071S20.2652 22 20 22H4c-.26522 0-.51957-.1054-.70711-.2929C3.10536 21.5196 3 21.2652 3 21V11c0-.2652.10536-.5196.29289-.7071C3.48043 10.1054 3.73478 10 4 10h1V9c0-.91925.18106-1.8295.53284-2.67878.35179-.84928.8674-1.62096 1.51741-2.27097.65001-.65001 1.42169-1.16562 2.27097-1.51741C10.1705 2.18106 11.0807 2 12 2c.9193 0 1.8295.18106 2.6788.53284.8493.35179 1.6209.8674 2.2709 1.51741.6501.65001 1.1657 1.42169 1.5175 2.27097C18.8189 7.1705 19 8.08075 19 9v1Zm-2 0V9c0-1.32608-.5268-2.59785-1.4645-3.53553C14.5979 4.52678 13.3261 4 12 4c-1.3261 0-2.59785.52678-3.53553 1.46447C7.52678 6.40215 7 7.67392 7 9v1h10Zm-6 4v4h2v-4h-2Z" /></svg>;
export default FillRockIcon;