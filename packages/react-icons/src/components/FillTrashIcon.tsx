import { SVGProps } from "react";

const FillTrashIcon = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}><path fill={props.color || '#000'} d="M17 6h5v2h-2v13c0 .2652-.1054.5196-.2929.7071S19.2652 22 19 22H5c-.26522 0-.51957-.1054-.70711-.2929C4.10536 21.5196 4 21.2652 4 21V8H2V6h5V3c0-.26522.10536-.51957.29289-.70711C7.48043 2.10536 7.73478 2 8 2h8c.2652 0 .5196.10536.7071.29289C16.8946 2.48043 17 2.73478 17 3v3Zm-8 5v6h2v-6H9Zm4 0v6h2v-6h-2ZM9 4v2h6V4H9Z" /></svg>;

export default FillTrashIcon;