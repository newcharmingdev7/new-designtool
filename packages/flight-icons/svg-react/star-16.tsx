import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconStar16 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 .5a.75.75 0 01.67.412l2.064 4.094 4.622.662a.75.75 0 01.412 1.285l-3.335 3.18.786 4.488a.75.75 0 01-1.082.796L8 13.287l-4.137 2.13a.75.75 0 01-1.082-.796l.786-4.489-3.335-3.18a.75.75 0 01.412-1.284l4.622-.662L7.33.912A.75.75 0 018 .5zm0 2.416L6.43 6.03a.75.75 0 01-.564.405l-3.48.498 2.507 2.39a.75.75 0 01.22.672l-.594 3.396 3.138-1.616a.75.75 0 01.686 0l3.138 1.616-.595-3.396a.75.75 0 01.221-.672l2.507-2.39-3.48-.498a.75.75 0 01-.563-.405L8 2.916z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
