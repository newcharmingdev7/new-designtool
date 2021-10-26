import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconMinusPlusCircle24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M6 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5H6zM15.75 12.25A.75.75 0 0015 13v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2a.75.75 0 00-.75-.75z" />
          <path
            d="M8.25 15.5c.085 0 .17-.002.254-.004a7.25 7.25 0 106.991-6.991A7.25 7.25 0 108.25 15.5zm0-13a5.75 5.75 0 10.467 11.481 7.262 7.262 0 015.264-5.264A5.75 5.75 0 008.25 2.5zM10 15.75a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
