import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconFilePlus16 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M7.75 7a.75.75 0 01.75.75V9h1.25a.75.75 0 010 1.5H8.5v1.25a.75.75 0 01-1.5 0V10.5H5.75a.75.75 0 010-1.5H7V7.75A.75.75 0 017.75 7z" />
          <path
            d="M3.25 0A2.25 2.25 0 001 2.25v11.5A2.25 2.25 0 003.25 16h9.5A2.25 2.25 0 0015 13.75V5.457c0-.331-.132-.65-.366-.884L10.427.366A1.25 1.25 0 009.543 0H3.25zM2.5 2.25a.75.75 0 01.75-.75H9v3.75c0 .414.336.75.75.75h3.75v7.75a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75V2.25zm9.94 2.25L10.5 2.56V4.5h1.94z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
