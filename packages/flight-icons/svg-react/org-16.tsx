import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconOrg16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M1 3.25A2.25 2.25 0 013.25 1h6.5A2.25 2.25 0 0112 3.25v2.112l2.05 1.453A2.25 2.25 0 0115 8.65v5.1c0 .69-.56 1.25-1.25 1.25h-2.5a.748.748 0 01-.75-.751v-11a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v11a.75.75 0 01-1.5 0v-11zM12 13.5V7.2l1.184.839a.75.75 0 01.316.612v4.85H12z"
                        clipRule="evenodd"
                    />
                    <path d="M4.75 10.55a.7.7 0 00-.7.7v3a.7.7 0 101.4 0v-2.3h2.1v2.3a.7.7 0 101.4 0v-3a.7.7 0 00-.7-.7h-3.5zM4.25 4.75A.75.75 0 015 4h.25a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.75 4a.75.75 0 000 1.5H8A.75.75 0 008 4h-.25zM4.25 6.75A.75.75 0 015 6h.25a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.75 6a.75.75 0 000 1.5H8A.75.75 0 008 6h-.25zM4.25 8.75A.75.75 0 015 8h.25a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.75 8a.75.75 0 000 1.5H8A.75.75 0 008 8h-.25z" />
                </g>
            </svg>
        );
    }
);
