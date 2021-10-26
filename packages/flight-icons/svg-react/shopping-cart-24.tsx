import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconShoppingCart24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path
            d="M1.25 1.5a.75.75 0 000 1.5h2.089a1.25 1.25 0 011.229 1.02l1.444 7.74.706 3.971A2.75 2.75 0 009.426 18h10.142a2.75 2.75 0 002.71-2.279l1.303-7.5A2.75 2.75 0 0020.872 5H6.276l-.234-1.255A2.75 2.75 0 003.34 1.5H1.25zm6.238 9.994L6.556 6.5h14.316c.776 0 1.365.7 1.232 1.464l-1.305 7.5a1.25 1.25 0 01-1.231 1.036H9.426a1.25 1.25 0 01-1.23-1.031l-.708-3.975z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path d="M11.5 20.75a1.75 1.75 0 01-1.75 1.75h-.01a1.75 1.75 0 110-3.5h.01c.966 0 1.75.784 1.75 1.75zM21.5 20.75a1.75 1.75 0 01-1.75 1.75h-.01a1.75 1.75 0 110-3.5h.01c.966 0 1.75.784 1.75 1.75z" />
        </g>
      </svg>
    )
  }
)
