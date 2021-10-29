import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVault16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M6.035 3.974A4.978 4.978 0 019 3c1.11 0 2.136.362 2.965.974l.005-.004a.75.75 0 111.06 1.06l-.004.005C13.638 5.865 14 6.89 14 8c0 1.11-.362 2.136-.974 2.965l.004.005a.75.75 0 11-1.06 1.06l-.005-.004A4.978 4.978 0 019 13a4.978 4.978 0 01-2.965-.974l-.005.004a.75.75 0 01-1.06-1.06l.004-.005A4.977 4.977 0 014 8c0-1.11.362-2.136.974-2.965L4.97 5.03a.75.75 0 011.06-1.06l.005.004zm1.078 1.078A3.484 3.484 0 019 4.5c.695 0 1.343.203 1.887.552l-.917.918a.75.75 0 001.06 1.06l.918-.917c.35.544.552 1.192.552 1.887 0 .695-.203 1.343-.552 1.887l-.918-.917a.75.75 0 10-1.06 1.06l.917.918A3.484 3.484 0 019 11.5a3.483 3.483 0 01-1.887-.552l.917-.918a.75.75 0 10-1.06-1.06l-.918.917A3.484 3.484 0 015.5 8c0-.695.203-1.343.552-1.887l.918.917a.75.75 0 001.06-1.06l-.917-.918z"
                        clipRule="evenodd"
                    />
                    <path d="M2.75 3.25A.75.75 0 013.5 4v1.5a.75.75 0 01-1.5 0V4a.75.75 0 01.75-.75zM3.5 10.5a.75.75 0 00-1.5 0V12a.75.75 0 001.5 0v-1.5z" />
                    <path
                        fillRule="evenodd"
                        d="M2.25 1A2.25 2.25 0 000 3.25v9.5A2.25 2.25 0 002.25 15H3v.25a.75.75 0 001.5 0V15h7v.25a.75.75 0 001.5 0V15h.75A2.25 2.25 0 0016 12.75v-9.5A2.25 2.25 0 0013.75 1H2.25zm11.5 12.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h11.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
