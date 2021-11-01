import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBox16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M6.98.678a2.25 2.25 0 012.04 0l5.297 2.696c.42.214.683.644.683 1.114v6.717c0 .658-.37 1.261-.956 1.56L9.02 15.322a2.25 2.25 0 01-2.042 0l-5.023-2.557A1.75 1.75 0 011 11.205V4.488c0-.47.264-.9.683-1.114L6.979.678zm1.36 1.337a.75.75 0 00-.68 0L3.224 4.273 8 6.661l4.776-2.388L8.34 2.015zm-5.84 9.19V5.588l4.75 2.375v5.814l-4.613-2.35a.25.25 0 01-.137-.222zm6.25 2.572l4.613-2.35a.25.25 0 00.137-.222V5.588L8.75 7.963v5.814z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
