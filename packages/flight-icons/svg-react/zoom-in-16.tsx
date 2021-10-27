import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconZoomIn16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.25 4a.75.75 0 01.75.75V6.5h1.75a.75.75 0 010 1.5H8v1.75a.75.75 0 01-1.5 0V8H4.75a.75.75 0 010-1.5H6.5V4.75A.75.75 0 017.25 4z" />
                    <path
                        fillRule="evenodd"
                        d="M7.25 1a6.25 6.25 0 103.857 11.168l2.613 2.612a.75.75 0 101.06-1.06l-2.612-2.613A6.25 6.25 0 007.25 1zM2.5 7.25a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
