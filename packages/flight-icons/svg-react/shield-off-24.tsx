import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconShieldOff24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M2.28 1.22a.75.75 0 00-1.06 1.06l2.185 2.185A1.937 1.937 0 003 5.651V12c0 2.732 1.462 5.038 3.104 6.774 1.65 1.744 3.562 3 4.65 3.642a2.442 2.442 0 002.496-.002c1.066-.63 2.928-1.85 4.557-3.546l3.913 3.912a.75.75 0 101.06-1.06L2.28 1.22zm14.466 16.587L4.508 5.568a.44.44 0 00-.008.083V12c0 2.182 1.172 4.136 2.693 5.744 1.514 1.6 3.294 2.772 4.323 3.38a.942.942 0 00.97-.002c1.02-.602 2.763-1.75 4.26-3.315z"
                        clipRule="evenodd"
                    />
                    <path d="M12.96 1.307a2.75 2.75 0 00-1.92 0l-2.302.858a.75.75 0 10.524 1.406l2.301-.858a1.25 1.25 0 01.874 0l6.25 2.33c.489.182.813.649.813 1.17V12c0 .574-.08 1.13-.227 1.668a.75.75 0 101.448.394c.178-.657.279-1.346.279-2.062V6.214a2.75 2.75 0 00-1.79-2.577l-6.25-2.33z" />
                </g>
            </svg>
        );
    }
);
