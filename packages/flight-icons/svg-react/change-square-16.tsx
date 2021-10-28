import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconChangeSquare16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    <path d="M8.586 7.532c.477.597.864.834 1.135.92a.936.936 0 00.69-.04c.228-.1.442-.27.627-.458.09-.09.168-.18.234-.257l.03-.036c.048-.058.12-.143.17-.193a.75.75 0 011.062 1.06l-.023.026-.025.03-.07.082a5.846 5.846 0 01-.312.344c-.253.256-.623.572-1.095.778a2.434 2.434 0 01-1.743.094c-.64-.204-1.257-.67-1.852-1.414-.477-.597-.864-.834-1.135-.92a.936.936 0 00-.69.04c-.228.1-.442.27-.627.458-.09.09-.168.18-.234.257l-.03.036a3.3 3.3 0 01-.17.193.75.75 0 01-1.063-1.057l.001-.002.023-.027.025-.03.07-.082c.077-.092.183-.214.312-.344.253-.256.623-.572 1.095-.777a2.434 2.434 0 011.743-.095c.64.204 1.257.67 1.852 1.414z" />
                    <path
                        fillRule="evenodd"
                        d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5zM2.5 3.25a.75.75 0 01.75-.75h9.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75v-9.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
