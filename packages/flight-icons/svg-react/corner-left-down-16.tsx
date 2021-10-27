import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCornerLeftDown16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M13.25 2.5a.75.75 0 010 1.5h-4.5A1.75 1.75 0 007 5.75v5.69l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V5.75A3.25 3.25 0 018.75 2.5h4.5z"
                />
            </svg>
        );
    }
);
