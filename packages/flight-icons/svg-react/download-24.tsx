import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconDownload24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    <path d="M12.75 2.75a.75.75 0 00-1.5 0v10.628L7.293 9.232a.75.75 0 10-1.086 1.036l5.25 5.499A.748.748 0 0012 16h.012a.747.747 0 00.53-.232l5.25-5.5a.75.75 0 00-1.085-1.036l-3.957 4.146V2.75z" />
                    <path d="M2.75 14a.75.75 0 01.75.75v4.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25v-4.5a.75.75 0 011.5 0v4.5A2.75 2.75 0 0119.25 22H4.75A2.75 2.75 0 012 19.25v-4.5a.75.75 0 01.75-.75z" />
                </g>
            </svg>
        );
    }
);
