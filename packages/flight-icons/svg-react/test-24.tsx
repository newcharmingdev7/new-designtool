import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconTest24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M2.5 12a9.5 9.5 0 019.976-9.488.75.75 0 10.079-1.498A10.64 10.64 0 0012 1C5.925 1 1 5.925 1 12s4.925 11 11 11a11 11 0 009.899-6.197V16.8c.082-.168.158-.336.23-.506a.75.75 0 00-1.382-.583A9.5 9.5 0 0112 21.5 9.5 9.5 0 012.5 12zM15.793 1.71a.75.75 0 10-.543 1.397c.296.116.585.246.866.39a.75.75 0 00.686-1.333 10.58 10.58 0 00-1.009-.455zM19.475 4.101a.75.75 0 10-1.05 1.071c.228.224.445.458.65.702a.75.75 0 001.148-.966c-.236-.28-.486-.55-.748-.807zM21.967 7.696a.75.75 0 10-1.371.609c.13.292.245.59.347.893a.75.75 0 001.422-.476c-.116-.349-.25-.69-.398-1.026zM22.942 11.97a.75.75 0 00-1.5.037c.009.317 0 .634-.024.95a.75.75 0 001.495.119c.03-.37.039-.739.03-1.107z" />
                    <path d="M17.78 8.22a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l2.47 2.47 6.97-6.97a.75.75 0 011.06 0z" />
                </g>
            </svg>
        );
    }
);
