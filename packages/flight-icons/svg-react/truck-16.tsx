import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTruck16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M0 3.25A2.25 2.25 0 012.25 1h7a2.25 2.25 0 012.25 2.25v.328h.643a2.25 2.25 0 011.565.634l1.608 1.557A2.25 2.25 0 0116 7.385v2.865A1.75 1.75 0 0114.292 12a2.5 2.5 0 11-4.584 0H6.292a2.5 2.5 0 11-4.584 0A1.75 1.75 0 010 10.25v-7zM12 12a1 1 0 100 2 1 1 0 000-2zm2.25-1.5a.25.25 0 00.25-.25V7.385a.75.75 0 00-.228-.538l-1.608-1.558a.75.75 0 00-.521-.211H11.5V10.5h2.75zm-4.25 0H1.75a.25.25 0 01-.25-.25v-7a.75.75 0 01.75-.75h7a.75.75 0 01.75.75v7.25zM3 13a1 1 0 112 0 1 1 0 01-2 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
