import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconReplicationDirect24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M1 3.75A2.75 2.75 0 013.75 1h10.5A2.75 2.75 0 0117 3.75v12.5a.75.75 0 01-.75.75H3.75A2.75 2.75 0 011 14.25V3.75zM3.75 2.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25H15.5V3.75c0-.69-.56-1.25-1.25-1.25H3.75z"
                        clipRule="evenodd"
                    />
                    <path d="M19.25 6a.75.75 0 01.75.75v11.5c0 .964-.778 1.75-1.747 1.75H6.75a.75.75 0 010-1.5h11.503c.135 0 .247-.11.247-.25V6.75a.75.75 0 01.75-.75z" />
                    <path d="M23 9.75a.75.75 0 00-1.5 0v9.5a2.248 2.248 0 01-2.248 2.25H9.75a.75.75 0 000 1.5h9.502A3.748 3.748 0 0023 19.25v-9.5z" />
                </g>
            </svg>
        );
    }
);
