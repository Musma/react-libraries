import { SVGProps } from "react";

const OutlineTemperatureIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M8.36356 5.63644c0-.96445.38312-1.88939 1.06508-2.57135C10.1106 2.38312 11.0356 2 12 2c.9644 0 1.8894.38312 2.5713 1.06509.682.68196 1.0651 1.6069 1.0651 2.57135v4.77736c1.1119.7742 1.9476 1.883 2.3856 3.165.438 1.2821.4554 2.6705.0497 3.9631-.4057 1.2926-1.2133 2.4221-2.3054 3.2239C14.6743 21.5676 13.3548 22 12 22s-2.67427-.4324-3.76632-1.2342-1.89971-1.9313-2.30542-3.2239c-.4057-1.2926-.38828-2.681.04973-3.9631.438-1.282 1.27374-2.3908 2.38557-3.165V5.63644Zm1.04002 6.26826c-.79441.5529-1.39162 1.3448-1.70471 2.2606-.31309.9158-.32571 1.9076-.03602 2.8311.2897.9234.86658 1.7303 1.64666 2.3032.78009.5728 1.72269.8817 2.69049.8817s1.9104-.3089 2.6905-.8817c.7801-.5729 1.3569-1.3798 1.6466-2.3032.2897-.9235.2771-1.9153-.036-2.8311-.3131-.9158-.9103-1.7077-1.7047-2.2606l-.7782-.5427V5.63644c0-.48223-.1916-.9447-.5325-1.28568-.341-.34098-.8035-.53254-1.2857-.53254-.4822 0-.9447.19156-1.2857.53254-.341.34098-.5325.80345-.5325 1.28568V11.362l-.77822.5427Zm-1.04002 3.7319h7.27284c0 .9645-.3831 1.8894-1.0651 2.5714-.6819.6819-1.6069 1.0651-2.5713 1.0651-.9644 0-1.8894-.3832-2.57136-1.0651-.68196-.682-1.06508-1.6069-1.06508-2.5714Z" /></svg>;

export default OutlineTemperatureIcon;