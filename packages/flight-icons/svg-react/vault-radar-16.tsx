import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultRadar16 = forwardRef<SVGSVGElement, IconProps>(
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
                height={17}
                fill="none"
                viewBox="0 0 16 17"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M12.37 7.536l.463.464-.001.002a4.838 4.838 0 01-4.833 4.833 4.838 4.838 0 01-4.832-4.833 4.838 4.838 0 014.832-4.834c1.44 0 2.815.653 3.73 1.76L8.654 8.002H8v-.657l.964-.964A1.882 1.882 0 008 6.115c-1.04 0-1.886.847-1.886 1.887s.846 1.886 1.886 1.886 1.886-.846 1.886-1.886l.465-.465.464.465a2.818 2.818 0 01-2.815 2.815 2.818 2.818 0 01-2.815-2.815A2.818 2.818 0 018 5.186c.596 0 1.16.186 1.634.525l.779-.778A3.917 3.917 0 008 4.095 3.91 3.91 0 004.097 8 3.91 3.91 0 008 11.905 3.91 3.91 0 0011.905 8l.464-.464z" />
                    <path
                        fillRule="evenodd"
                        d="M1.333 0h13.333v.002c.736 0 1.332.596 1.332 1.332v13.333c0 .736-.596 1.333-1.332 1.333H1.333A1.333 1.333 0 010 14.667V1.334C0 .598.597.002 1.333 0zm14.001 1.336c0-.368-.299-.667-.667-.667l-.001-.002H1.333c-.368 0-.667.3-.667.667V14.67c0 .368.299.667.667.667h13.334c.368 0 .667-.3.667-.667V1.336z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
