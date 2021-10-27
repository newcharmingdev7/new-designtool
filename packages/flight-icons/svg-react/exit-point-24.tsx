import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconExitPoint24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M3 12a7 7 0 0110.707-5.939.75.75 0 01-.795 1.272 5.5 5.5 0 100 9.334.75.75 0 01.795 1.272A7 7 0 013 12z" />
                    <path d="M9 12a.75.75 0 01.75-.75h9.614l-3.129-2.955a.75.75 0 011.03-1.09l4.498 4.248a.748.748 0 010 1.093l-4.498 4.25a.75.75 0 01-1.03-1.091l3.129-2.955H9.75A.75.75 0 019 12z" />
                </g>
            </svg>
        );
    }
);
