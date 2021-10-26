import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconBookmark24 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 4.75A2.75 2.75 0 016.75 2h10.5A2.75 2.75 0 0120 4.75v16.376a1 1 0 01-1.382.924l-6.522-2.699a.25.25 0 00-.192 0L5.382 22.05A1 1 0 014 21.126V4.75zM6.75 3.5c-.69 0-1.25.56-1.25 1.25v15.628l5.83-2.413a1.75 1.75 0 011.34 0l5.83 2.413V4.75c0-.69-.56-1.25-1.25-1.25H6.75z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
