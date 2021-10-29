import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWall16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M2.25 1A2.25 2.25 0 000 3.25v9.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-9.5A2.25 2.25 0 0013.75 1H2.25zM4.5 2.5H2.25a.75.75 0 00-.75.75V5h3V2.5zm-3 4v3H7v-3H1.5zm0 4.5v1.75c0 .414.336.75.75.75H4.5V11h-3zM6 13.5h4V11H6v2.5zm5.5 0h2.25a.75.75 0 00.75-.75V11h-3v2.5zm3-4v-3h-6v3h6zm0-4.5V3.25a.75.75 0 00-.75-.75H11.5V5h3zM10 2.5V5H6V2.5h4z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
