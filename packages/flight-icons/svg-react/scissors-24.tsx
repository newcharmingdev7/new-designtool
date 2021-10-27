import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconScissors24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M5.5 2a3.5 3.5 0 101.99 6.38l3.346 3.12-3.346 3.12a3.5 3.5 0 101.023 1.097l3.93-3.664.009-.008 8.31-7.746A.75.75 0 0019.739 3.2l-7.803 7.274-3.424-3.192A3.5 3.5 0 005.5 2zm-2 3.5a2 2 0 114 0 2 2 0 01-4 0zm0 12a2 2 0 114 0 2 2 0 01-4 0z"
                        clipRule="evenodd"
                    />
                    <path d="M20.763 18.703a.75.75 0 01-1.026 1.095l-5.5-5.15a.75.75 0 011.026-1.095l5.5 5.15z" />
                </g>
            </svg>
        );
    }
);
