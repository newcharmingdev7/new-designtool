import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHandshake24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M7.833 4.5a.75.75 0 00-.55.24L6.117 6H1.75a.75.75 0 000 1.5H4v7.458c0 .69-.56 1.25-1.25 1.25h-1a.75.75 0 000 1.5h1A2.75 2.75 0 005.296 16h.999l4.125 2.438a2.75 2.75 0 003.133-.234L16.266 16h2.438a2.751 2.751 0 002.546 1.708h1a.75.75 0 000-1.5h-1c-.69 0-1.25-.56-1.25-1.25V7.5h2.25a.75.75 0 000-1.5h-4.367l-1.166-1.26a.75.75 0 00-.55-.24h-3.473a.75.75 0 00-.533.223l-.524.53-.476-.513a.75.75 0 00-.55-.24H7.833zm-1.389 3H5.5v7h1a.75.75 0 01.382.104l4.301 2.542a1.25 1.25 0 001.424-.106l2.312-1.878-1.48-1.664a.75.75 0 011.122-.996l1.776 1.998H18.5v-7h-.944a.75.75 0 01-.55-.24L15.838 6h-2.831L10.37 8.673a1.25 1.25 0 00-.032 1.723l.119.129a1.25 1.25 0 001.762.08l1.277-1.16a.75.75 0 011.008 1.11l-1.276 1.16a2.75 2.75 0 01-3.877-.176l-.118-.13a2.75 2.75 0 01.07-3.79l1.28-1.296-.3-.323H8.161L6.995 7.26a.75.75 0 01-.55.24z"
                        clipRule="evenodd"
                    />
                    <path d="M23 13.875a.875.875 0 11-1.75 0 .875.875 0 011.75 0zM2.75 14.014a.875.875 0 11-1.75 0 .875.875 0 011.75 0z" />
                </g>
            </svg>
        );
    }
);
