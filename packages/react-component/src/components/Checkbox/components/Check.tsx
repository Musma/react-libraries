import { SVGProps } from 'react'

export const Check = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={12}
      height={12}
      fill="none"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M3.875 6.575 2.3 5l-.525.525 2.1 2.1 4.5-4.5L7.85 2.6 3.875 6.575Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(.5 .5)" d="M0 0h9v9H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
