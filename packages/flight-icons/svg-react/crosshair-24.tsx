import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCrosshair24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.75 9.47v-2.72a.75.75 0 00-1.5 0v2.72a9.502 9.502 0 01-8.72-8.72h2.72a.75.75 0 000-1.5H2.53a9.502 9.502 0 018.72-8.72v2.72a.75.75 0 001.5 0V2.53a9.502 9.502 0 018.72 8.72h-2.72a.75.75 0 000 1.5h2.72a9.502 9.502 0 01-8.72 8.72z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
