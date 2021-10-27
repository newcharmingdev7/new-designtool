import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLink24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M16.575 2a5.48 5.48 0 00-3.848 1.531L11.094 5.15a.75.75 0 001.056 1.065l1.62-1.606a3.98 3.98 0 015.567.052 3.951 3.951 0 01.053 5.542l-2.829 2.82a3.974 3.974 0 01-3.094 1.15 3.984 3.984 0 01-2.898-1.577.75.75 0 10-1.2.9 5.47 5.47 0 003.991 2.174 5.486 5.486 0 004.26-1.585l2.834-2.824.009-.01a5.45 5.45 0 00-.067-7.652A5.48 5.48 0 0016.576 2z" />
                    <path d="M10.64 8.33a5.486 5.486 0 00-4.26 1.585L3.545 12.74l-.009.01a5.45 5.45 0 00.067 7.652 5.48 5.48 0 007.67.067l1.624-1.62a.75.75 0 10-1.06-1.062l-1.61 1.605a3.98 3.98 0 01-5.565-.052 3.951 3.951 0 01-.053-5.543l2.829-2.82a3.973 3.973 0 013.094-1.15 3.984 3.984 0 012.898 1.578.75.75 0 001.2-.9A5.468 5.468 0 0010.64 8.33z" />
                </g>
            </svg>
        );
    }
);
