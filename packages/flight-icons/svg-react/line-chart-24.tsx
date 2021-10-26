import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconLineChart24 = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M3.75 2A2.75 2.75 0 001 4.75v14.5A2.75 2.75 0 003.75 22h16.5A2.75 2.75 0 0023 19.25V4.75A2.75 2.75 0 0020.25 2H3.75zM2.5 16.353v2.897c0 .69.56 1.25 1.25 1.25H8v-.75a.75.75 0 011.5 0v.75h5v-.75a.75.75 0 011.5 0v.75h4.25c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v9.656l6.007-4.971a.748.748 0 01.842-.1l5.572 2.787L18.55 9.4a.75.75 0 11.9 1.2l-3.987 2.99a.754.754 0 01-.812.074l-5.55-2.775L2.5 16.353z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
