import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconChevronUp16 = forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M3.235 10.795a.75.75 0 001.06-.03L8 6.842l3.705 3.923a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 00.03 1.06z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
