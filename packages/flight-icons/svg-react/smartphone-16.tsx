import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconSmartphone16 = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...props}
        ref={forwardedRef}
      >
        <g fill={color}>
          <path d="M8 12a1 1 0 100 2h.007a1 1 0 100-2H8z" />
          <path
            d="M4.25 0A2.25 2.25 0 002 2.25v11.5A2.25 2.25 0 004.25 16h7.5A2.25 2.25 0 0014 13.75V2.25A2.25 2.25 0 0011.75 0h-7.5zM3.5 2.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v11.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V2.25z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
