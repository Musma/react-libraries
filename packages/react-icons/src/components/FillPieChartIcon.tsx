import { SVGProps } from "react";

const FillPieChartIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M11.0226 2v10.9774H22C21.4977 18.0431 17.2231 22 12.0251 22 6.48822 22 2 17.5118 2 11.9749 2 6.77694 5.95689 2.50226 11.0226 2Zm2.005 0c2.3007.23178 4.4506 1.25155 6.0857 2.88665C20.7484 6.52175 21.7682 8.67169 22 10.9724h-8.9724V2Z" /></svg>;

export default FillPieChartIcon;