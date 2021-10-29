import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconStarOff24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12.673 1.418a.75.75 0 00-1.345 0l-1.584 3.21a.75.75 0 101.345.663L12 3.445 14.495 8.5a.75.75 0 00.564.41l5.58.816-2.756 2.685a.75.75 0 001.046 1.075l3.844-3.745a.75.75 0 00-.415-1.28l-6.693-.978-2.992-6.065z" />
                    <path
                        fillRule="evenodd"
                        d="M18.87 19.93l.204 1.193a.75.75 0 01-1.089.79L12 18.766l-5.985 3.149a.75.75 0 01-1.089-.79l1.143-6.666-4.842-4.717a.75.75 0 01.415-1.28l5.024-.734L1.22 2.28a.75.75 0 011.06-1.06l20.5 20.5a.75.75 0 11-1.06 1.06l-2.85-2.85zM7.988 9.05l-4.628.676 4.037 3.933a.75.75 0 01.216.664l-.952 5.556 4.989-2.625a.75.75 0 01.698 0l4.99 2.625-.307-1.786L7.99 9.049z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
