import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWaypointColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#14C6CB">
                    <path d="M16 3l-1.998 3.463L12.004 3H16zM5.334 5.312H4l3.332 5.777L6 13.4 0 3h6.667L10 8.778l.666-1.155L8 3h2.666L12 5.312l1.334 2.31L10 13.4 5.334 5.312z" />
                </g>
            </svg>
        );
    }
);
