import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBoundaryColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#F24C53">
                    <path d="M4.81 15v-1.085h2.25v-.67H5.968v-1.093h5.149L8.726 8l2.392-4.154H5.84v5.76H3V1h9.775l1.631 2.832L12.006 8l2.448 4.252L12.872 15H4.81z" />
                    <path d="M5.248 12.152h-1.09v1.092h1.09v-1.092zM4.09 13.907H3v1.092h1.09v-1.092z" />
                </g>
            </svg>
        );
    }
);
