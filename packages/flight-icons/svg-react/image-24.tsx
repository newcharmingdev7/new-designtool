import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconImage24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-1a1 1 0 100 2 1 1 0 000-2z" />
                    <path d="M2 4.75A2.75 2.75 0 014.75 2h14.5A2.75 2.75 0 0122 4.75v14.5A2.75 2.75 0 0119.25 22H4.75A2.75 2.75 0 012 19.25V4.75zm18.5 8.5v-8.5c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v14.5c0 .024 0 .047.002.07l10.654-8.773a2.75 2.75 0 013.644.132l2.7 2.571zM4.468 20.468l10.641-8.763a1.25 1.25 0 011.657.06l3.734 3.556v3.929c0 .69-.56 1.25-1.25 1.25H4.75c-.097 0-.191-.011-.282-.032z" />
                </g>
            </svg>
        );
    }
);
