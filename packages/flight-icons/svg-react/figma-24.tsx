import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconFigma24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M5 5.742C5 3.675 6.687 2 8.768 2h6.464C17.313 2 19 3.675 19 5.742c0 1.308-.676 2.46-1.7 3.129a3.732 3.732 0 011.7 3.13c0 2.066-1.687 3.741-3.768 3.741h-.081a3.768 3.768 0 01-2.534-.972v3.448c0 2.094-1.73 3.782-3.83 3.782C6.713 22 5 20.33 5 18.258c0-1.308.676-2.46 1.7-3.129A3.732 3.732 0 015 12c0-1.309.676-2.46 1.7-3.129A3.732 3.732 0 015 5.741zm6.383 3.742H8.768A2.525 2.525 0 006.234 12a2.525 2.525 0 002.518 2.516H11.383V9.484zM12.617 12a2.525 2.525 0 002.534 2.516h.081c1.4 0 2.534-1.126 2.534-2.516a2.525 2.525 0 00-2.534-2.516h-.081A2.525 2.525 0 0012.617 12zm-3.85 3.742h-.015a2.525 2.525 0 00-2.518 2.516c0 1.385 1.15 2.516 2.554 2.516 1.427 0 2.595-1.15 2.595-2.556v-2.476H8.768zm0-12.516h2.616v5.032H8.768a2.525 2.525 0 01-2.534-2.516 2.525 2.525 0 012.534-2.516zm3.85 5.032V3.226h2.615c1.4 0 2.534 1.126 2.534 2.516a2.525 2.525 0 01-2.534 2.516h-2.615z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
