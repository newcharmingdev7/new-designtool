import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWaypointFill24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M2 0a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2H2zm7.334 9.312H8l3.332 5.777L10 17.4 4 7h6.667L14 12.778l.666-1.155L12 7h2.666l2.668 4.623L14 17.4 9.334 9.312zM20 7l-1.998 3.463L16.004 7H20z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
