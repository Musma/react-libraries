import { SVGProps } from "react";

const FillGaugeIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm4.596 5.404c-.204-.205-.526-.233-.763-.067-2.89 2.028-4.52 3.23-4.894 3.602-.585.586-.585 1.536 0 2.122.586.585 1.536.585 2.122 0 .219-.22 1.418-1.851 3.598-4.897.168-.234.141-.556-.063-.76ZM17.5 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1Zm-11 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1Zm2.318-3.596c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.023 0 1.414.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414ZM12 5.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1Z" /></svg>;

export default FillGaugeIcon;