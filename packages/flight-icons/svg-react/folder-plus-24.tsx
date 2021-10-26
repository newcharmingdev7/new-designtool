import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconFolderPlus24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M11.75 10.5a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5H12.5v2.25a.75.75 0 01-1.5 0V15H8.75a.75.75 0 010-1.5H11v-2.25a.75.75 0 01.75-.75z" />
          <path
            d="M3.75 2A2.75 2.75 0 001 4.75v14.5A2.75 2.75 0 003.75 22h16.5A2.75 2.75 0 0023 19.25V6.75A2.75 2.75 0 0020.25 4h-7.172a1.25 1.25 0 01-.883-.366l-.829-.829A2.75 2.75 0 009.422 2H3.75zM2.5 4.75c0-.69.56-1.25 1.25-1.25h5.672c.331 0 .649.132.883.366l.829.829a2.75 2.75 0 001.944.805h7.172c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V8.5h16.75a.75.75 0 000-1.5H2.5V4.75z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
