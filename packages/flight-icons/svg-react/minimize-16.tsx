import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMinimize16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M10 4.94V2.75a.75.75 0 00-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-2.19l2.72-2.72a.75.75 0 00-1.06-1.06L10 4.94zM2.75 8.5a.75.75 0 000 1.5h2.19l-2.72 2.72a.75.75 0 101.06 1.06L6 11.06v2.19a.75.75 0 001.5 0v-4a.75.75 0 00-.75-.75h-4z" />
                </g>
            </svg>
        );
    }
);
