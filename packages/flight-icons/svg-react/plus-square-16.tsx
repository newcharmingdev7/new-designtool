import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconPlusSquare16 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M7.75 4a.75.75 0 01.75.75V7h2.25a.75.75 0 010 1.5H8.5v2.25a.75.75 0 01-1.5 0V8.5H4.75a.75.75 0 010-1.5H7V4.75A.75.75 0 017.75 4z" />
          <path
            d="M1 3.25A2.25 2.25 0 013.25 1h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 011 12.25v-9zm2.25-.75a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
