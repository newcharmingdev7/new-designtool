import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconPackage24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M10.794.754a2.75 2.75 0 012.412 0l8.811 4.298c.602.293.983.904.983 1.573v9.902a2.75 2.75 0 01-1.496 2.448l-8.25 4.226a2.75 2.75 0 01-2.508 0l-8.25-4.226A2.75 2.75 0 011 16.527V6.625c0-.67.381-1.28.983-1.573L10.794.754zm1.754 1.348a1.25 1.25 0 00-1.096 0l-2.82 1.375 8.505 4.253 3.52-1.672-8.109-3.956zm2.869 6.445L6.934 4.306 3.343 6.058 12 10.17l3.417-1.623zM2.5 16.527v-9.21l8.75 4.157v10.3L3.18 17.64a1.25 1.25 0 01-.68-1.113zm18.32 1.113l-8.07 4.133V11.474l8.75-4.156v9.21c0 .469-.263.898-.68 1.112z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
