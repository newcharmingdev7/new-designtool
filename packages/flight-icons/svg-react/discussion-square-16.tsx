import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconDiscussionSquare16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M11.25 1a.75.75 0 010 1.5h-9a.75.75 0 00-.75.75v6.531l.706-.51a.75.75 0 01.88 1.214L1.19 11.858A.75.75 0 010 11.25v-8A2.25 2.25 0 012.25 1h9z" />
                    <path
                        fillRule="evenodd"
                        d="M6.25 4A2.25 2.25 0 004 6.25v4.534a2.25 2.25 0 002.25 2.25h6.041l2.52 1.824A.75.75 0 0016 14.25v-8A2.25 2.25 0 0013.75 4h-7.5zM5.5 6.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v6.531l-1.526-1.104a.75.75 0 00-.44-.143H6.25a.75.75 0 01-.75-.75V6.25z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
