import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconAlibaba16 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M10.676 7.373H5.338v1.2h5.338v-1.2z" />
          <path d="M13.338 3H9.81l.852 1.213L13.244 5c.48.147.786.6.773 1.067v3.866c0 .48-.307.92-.772 1.067l-2.57.787L9.81 13h3.528C14.815 13 16 11.8 16 10.333V5.667C16.013 4.2 14.815 3 13.338 3zM2.662 3H6.19l-.852 1.213L2.768 5c-.478.147-.785.6-.771 1.067v3.866c0 .48.306.92.772 1.067l2.569.787L6.19 13H2.662A2.672 2.672 0 010 10.333V5.667A2.672 2.672 0 012.662 3z" />
        </g>
      </svg>
    )
  }
)
