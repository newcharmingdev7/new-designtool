import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconDelete24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M11.22 8.22a.75.75 0 011.06 0L15 10.94l2.72-2.72a.75.75 0 111.06 1.06L16.06 12l2.72 2.72a.75.75 0 11-1.06 1.06L15 13.06l-2.72 2.72a.75.75 0 11-1.06-1.06L13.94 12l-2.72-2.72a.75.75 0 010-1.06z" />
                    <path
                        fillRule="evenodd"
                        d="M6.579 3.97A2.75 2.75 0 018.676 3H21.25A2.75 2.75 0 0124 5.75v12.5A2.75 2.75 0 0121.25 21H8.676a2.75 2.75 0 01-2.097-.97l-6.4-7.545a.75.75 0 010-.97l6.4-7.544zm2.097.53a1.25 1.25 0 00-.953.441L1.733 12l5.99 7.059c.237.28.586.441.953.441H21.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H8.676z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
