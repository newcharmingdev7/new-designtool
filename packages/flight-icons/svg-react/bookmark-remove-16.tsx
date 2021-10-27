import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBookmarkRemove16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M5.75 6a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z" />
                    <path
                        fillRule="evenodd"
                        d="M4.25 1A2.25 2.25 0 002 3.25v10.83a1 1 0 001.478.878l4.403-2.394a.25.25 0 01.238 0l4.403 2.394A1 1 0 0014 14.08V3.25A2.25 2.25 0 0011.75 1h-7.5zM3.5 3.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v9.989l-3.664-1.992a1.75 1.75 0 00-1.672 0L3.5 13.239V3.25z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
