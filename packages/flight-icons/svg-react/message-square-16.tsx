import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMessageSquare16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M15 3.25A2.25 2.25 0 0012.75 1h-9.5A2.25 2.25 0 001 3.25v11a.75.75 0 001.26.55l2.801-2.6a.75.75 0 01.51-.2h7.179A2.25 2.25 0 0015 9.75v-6.5zm-2.25-.75a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H5.572a2.25 2.25 0 00-1.531.6L2.5 12.53V3.25a.75.75 0 01.75-.75h9.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
