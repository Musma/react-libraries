import { SVGProps } from "react";

const FillPenIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="m13.0179 6.26118 4.721 4.72212L6.721 22.0001H2V17.278L13.0179 6.26007v.00111Zm1.5736-1.57366 2.3605-2.36161c.2087-.20864.4918-.32585.7869-.32585.2951 0 .5781.11721.7868.32585l3.1485 3.14844c.2086.2087.3258.49173.3258.78683 0 .29511-.1172.57813-.3258.78684l-2.3617 2.36049-4.721-4.72099Z" /></svg>;

export default FillPenIcon;