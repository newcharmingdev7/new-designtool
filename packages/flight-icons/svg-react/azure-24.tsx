import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAzure24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M11.275 18.199l4.575-.808.043-.01-2.353-2.793a400.617 400.617 0 01-2.353-2.808c0-.013 2.43-6.693 2.443-6.717.004-.008 1.658 2.842 4.008 6.908 2.2 3.807 4.015 6.946 4.031 6.976L21.7 19l-14.957-.002 4.532-.8zM2.3 17.347c0-.004 1.109-1.925 2.464-4.27l2.464-4.262 2.871-2.406A1076.68 1076.68 0 0112.98 4a.504.504 0 01-.046.116l-3.118 6.676-3.062 6.557-2.227.002c-1.225.002-2.227 0-2.227-.004z" />
                </g>
            </svg>
        );
    }
);
