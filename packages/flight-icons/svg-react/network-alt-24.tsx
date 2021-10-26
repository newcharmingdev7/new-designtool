import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconNetworkAlt24 = forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color}>
          <path d="M23 12a.75.75 0 00-.232-.543l-5.5-5.25a.75.75 0 00-1.036 1.086L21.164 12l-4.932 4.707a.75.75 0 001.036 1.085l5.5-5.25A.75.75 0 0023 12zM1 12a.75.75 0 01.232-.543l5.5-5.25a.75.75 0 111.036 1.086L2.836 12l4.932 4.707a.75.75 0 01-1.036 1.085l-5.5-5.25A.75.75 0 011 12z" />
          <path d="M8 11a1 1 0 100 2h.01a1 1 0 100-2H8zM11 12a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zM16 11a1 1 0 100 2h.01a1 1 0 100-2H16z" />
        </g>
      </svg>
    )
  }
)
