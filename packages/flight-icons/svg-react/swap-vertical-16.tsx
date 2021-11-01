import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSwapVertical16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                    <path d="M1.45 3.74a.75.75 0 001.1 1.02l1.95-2.1v5.59a.75.75 0 101.5 0V2.66l1.95 2.1a.75.75 0 101.1-1.02L5.8.24a.75.75 0 00-1.1 0l-3.25 3.5zM10.75 7a.75.75 0 00-.75.75v5.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75a.75.75 0 00-.75-.75z" />
                </g>
            </svg>
        );
    }
);
