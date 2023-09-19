import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGoogleFormsColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#7248B9"
                    d="M17.89 22H6.11c-.748 0-1.36-.614-1.36-1.364V3.364C4.75 2.614 5.362 2 6.11 2h8.156l4.984 5v13.636c0 .75-.612 1.364-1.36 1.364z"
                />
                <path fill="#56368A" d="M14.266 2l4.984 5h-4.984V2z" />
                <g fill="#FDFFFF">
                    <path d="M16.078 10.864h-5.89V9.727h5.89v1.137zm0 1.59h-5.89v1.137h5.89v-1.136zm0 2.728h-5.89v1.136h5.89v-1.136zM9.055 10.295a.624.624 0 11-1.248.002.624.624 0 011.248-.002zM9.055 13.023a.624.624 0 11-1.248.002.624.624 0 011.248-.002zM9.055 15.75a.624.624 0 11-1.248.002.624.624 0 011.248-.002z" />
                </g>
            </svg>
        );
    }
);
