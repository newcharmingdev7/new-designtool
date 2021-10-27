import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGitPullRequest24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M7.5 9.92A3.501 3.501 0 006.75 3 3.5 3.5 0 006 9.92v10.83a.75.75 0 001.5 0V9.92zM4.75 6.5a2 2 0 114 0 2 2 0 01-4 0zM18 8.75v5.58a3.501 3.501 0 01-.75 6.92 3.5 3.5 0 01-.75-6.92V8.75c0-.69-.56-1.25-1.25-1.25H13A.75.75 0 0113 6h2.25A2.75 2.75 0 0118 8.75zm-2.75 9a2 2 0 114 0 2 2 0 01-4 0z" />
                </g>
            </svg>
        );
    }
);
