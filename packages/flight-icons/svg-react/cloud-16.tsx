import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloud16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M3.932 2.373a6.041 6.041 0 016.239 1.28 5.998 5.998 0 011.505 2.284h.28c1.071 0 2.1.424 2.858 1.18a4.025 4.025 0 010 5.703A4.051 4.051 0 0111.955 14H6.026a6.037 6.037 0 01-3.186-.906 6.008 6.008 0 01-2.223-2.448 5.982 5.982 0 01.644-6.32 6.02 6.02 0 012.67-1.953zm.526 1.405a4.52 4.52 0 00-2.013 1.47 4.488 4.488 0 001.186 6.572c.716.444 1.542.68 2.386.68h5.938c.676 0 1.324-.268 1.8-.742a2.524 2.524 0 000-3.578 2.551 2.551 0 00-1.8-.743h-.83a.75.75 0 01-.726-.561A4.496 4.496 0 009.14 4.74a4.541 4.541 0 00-4.681-.963z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
