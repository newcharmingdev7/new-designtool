import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconXSquare16 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.139 2.5a.639.639 0 00-.639.639v9.722c0 .353.286.639.639.639h9.722a.639.639 0 00.639-.639V3.14a.639.639 0 00-.639-.639H3.14zM1 3.139C1 1.958 1.958 1 3.139 1h9.722C14.042 1 15 1.958 15 3.139v9.722A2.139 2.139 0 0112.861 15H3.14A2.139 2.139 0 011 12.861V3.14zm3.72 1.58a.75.75 0 011.06 0L8 6.94l2.22-2.22a.75.75 0 111.06 1.061L9.06 8l2.22 2.22a.75.75 0 11-1.06 1.06L8 9.06l-2.22 2.22a.75.75 0 01-1.06-1.06L6.94 8 4.72 5.78a.75.75 0 010-1.06z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
