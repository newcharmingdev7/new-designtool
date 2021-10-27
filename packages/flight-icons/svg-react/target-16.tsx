import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTarget16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M8 6a2 2 0 100 4 2 2 0 000-4zm-.5 2a.5.5 0 111 0 .5.5 0 01-1 0z" />
                    <path d="M3 8a5 5 0 1110 0A5 5 0 013 8zm5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                    <path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" />
                </g>
            </svg>
        );
    }
);
