import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCpu16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M6.25 5C5.56 5 5 5.56 5 6.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C11 5.56 10.44 5 9.75 5h-3.5zm.25 4.5v-3h3v3h-3z" />
                    <path d="M6.25.05a.7.7 0 01.7.7V2h2.1V.75a.7.7 0 111.4 0V2h1.3A2.25 2.25 0 0114 4.25v1.3h1.25a.7.7 0 110 1.4H14v2.1h1.25a.7.7 0 110 1.4H14v1.3A2.25 2.25 0 0111.75 14h-1.3v1.25a.7.7 0 11-1.4 0V14h-2.1v1.25a.7.7 0 11-1.4 0V14h-1.3A2.25 2.25 0 012 11.75v-1.3H.75a.7.7 0 110-1.4H2v-2.1H.75a.7.7 0 110-1.4H2v-1.3A2.25 2.25 0 014.25 2h1.3V.75a.7.7 0 01.7-.7zM3.5 4.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z" />
                </g>
            </svg>
        );
    }
);
