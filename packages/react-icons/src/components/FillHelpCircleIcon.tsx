import { SVGProps } from "react";

const FillHelpCircleIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-1-7v2h2v-2h-2Zm2-1.645c.8037-.2422 1.4936-.765 1.9442-1.4733.4505-.7082.6317-1.5546.5105-2.38523-.1211-.83059-.5366-1.59003-1.1707-2.14001C13.6499 6.80647 12.8394 6.50254 12 6.5c-.8091-.00006-1.5933.28015-2.21921.79299C9.15492 7.80583 8.72601 8.51963 8.567 9.313l1.962.393c.0557-.27857.1893-.5356.3854-.74118.196-.20559.4464-.35128.722-.42011.2756-.06884.5651-.058.8348.03126.2697.08926.5085.25327.6886.47294.1802.21967.2942.48598.3289.76793.0347.28196-.0114.56796-.1329.82476-.1215.2568-.3135.4738-.5535.6257-.24.152-.5182.2327-.8023.2327-.2652 0-.5196.1054-.7071.2929S11 12.2348 11 12.5V14h2v-.645Z" /></svg>;

export default FillHelpCircleIcon;