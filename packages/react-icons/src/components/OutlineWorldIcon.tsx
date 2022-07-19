import { SVGProps } from "react";

const OutlineWorldIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-2.29-2.333C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062c.19459 1.5389.83192 2.9882 1.83457 4.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667ZM10.03 13c.151 2.439.848 4.73 1.97 6.752 1.1523-2.0754 1.8254-4.3825 1.97-6.752h-3.94Zm9.908 0h-3.965c-.1249 2.3102-.6964 4.5743-1.683 6.667 1.486-.4449 2.8108-1.3118 3.8134-2.4953 1.0027-1.1835 1.64-2.6328 1.8346-4.1717ZM4.062 11h3.965c.12487-2.31021.69641-4.57431 1.683-6.667-1.48599.44488-2.81078 1.31175-3.81343 2.4953C4.89392 8.01184 4.25659 9.4611 4.062 11Zm5.969 0h3.938c-.1442-2.3694-.817-4.67647-1.969-6.752-1.1523 2.07545-1.8254 4.38252-1.97 6.752h.001Zm4.259-6.667c.9866 2.09269 1.5581 4.35679 1.683 6.667h3.965c-.1946-1.5389-.8319-2.98816-1.8346-4.1717C17.1008 5.64475 15.776 4.77788 14.29 4.333Z" /></svg>;

export default OutlineWorldIcon;