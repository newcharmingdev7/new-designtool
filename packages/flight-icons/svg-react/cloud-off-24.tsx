import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloudOff24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    <path
                        fillRule="evenodd"
                        d="M2.28 1.22a.75.75 0 00-1.06 1.06l2.447 2.448a8.96 8.96 0 00-1.801 1.766 9.041 9.041 0 00-1.82 4.598v.003a9.064 9.064 0 00.867 4.87 8.975 8.975 0 003.294 3.674A8.873 8.873 0 008.934 21h9.2c.54 0 1.073-.075 1.585-.22l2 2a.75.75 0 101.061-1.06L2.28 1.22zm16.15 18.27L4.742 5.804c-.639.44-1.209.98-1.687 1.603a7.541 7.541 0 00-1.518 3.832v.003a7.564 7.564 0 00.723 4.066 7.475 7.475 0 002.744 3.06A7.374 7.374 0 008.923 19.5H18.133c.1 0 .198-.003.296-.01z"
                        clipRule="evenodd"
                    />
                    <path d="M9.702 3.003a.75.75 0 10-.133 1.494 7.394 7.394 0 014.16 1.757 7.51 7.51 0 012.387 3.867.75.75 0 00.727.566h.061c1.304 0 2.327 0 3.292.522.635.343 1.176.84 1.575 1.447a4.436 4.436 0 01.383 4.158.75.75 0 101.383.581 5.946 5.946 0 00-.512-5.563 5.879 5.879 0 00-2.116-1.943c-1.17-.632-2.393-.696-3.5-.701a9.005 9.005 0 00-2.704-4.072 8.894 8.894 0 00-5.003-2.113z" />
                </g>
            </svg>
        );
    }
);
