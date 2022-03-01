import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHelp24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M12.349 7.536c-.612-.1-1.24.01-1.77.31s-.926.765-1.125 1.308a.75.75 0 11-1.408-.516A3.995 3.995 0 019.842 6.54a4.212 4.212 0 012.75-.484c.946.156 1.81.63 2.436 1.343.627.715.973 1.624.972 2.569 0 .636-.127 1.168-.369 1.62-.24.449-.569.77-.9 1.021a8.43 8.43 0 01-.804.519l-.144.085c-.294.177-.526.329-.712.507-.185.178-.264.341-.298.441a.62.62 0 00-.028.107l-.001.007a.75.75 0 01-1.5-.025c0-.198.047-.394.111-.58a2.63 2.63 0 01.677-1.032c.318-.304.675-.529.98-.712l.177-.104a6.68 6.68 0 00.636-.409 1.64 1.64 0 00.484-.533c.107-.2.191-.482.191-.913v-.001c0-.573-.21-1.132-.6-1.578a2.628 2.628 0 00-1.551-.852z"
                        clipRule="evenodd"
                    />
                    <path d="M12 16a1 1 0 100 2h.01a1 1 0 100-2H12z" />
                    <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-9.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
