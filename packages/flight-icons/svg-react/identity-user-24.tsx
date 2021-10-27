import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconIdentityUser24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.858 14.79A2.944 2.944 0 019.875 14h4.25c.748 0 1.475.28 2.017.79.543.511.858 1.216.858 1.96v.5a.75.75 0 01-1.5 0v-.5c0-.316-.133-.63-.386-.868a1.445 1.445 0 00-.989-.382h-4.25c-.379 0-.734.142-.989.382a1.193 1.193 0 00-.386.868v.5a.75.75 0 01-1.5 0v-.5c0-.744.315-1.449.858-1.96z" />
                    <path
                        fillRule="evenodd"
                        d="M12 7.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M8.75 1A1.75 1.75 0 007 2.75V3H3.75A2.75 2.75 0 001 5.75v12.5A2.75 2.75 0 003.75 21h16.5A2.75 2.75 0 0023 18.25V5.75A2.75 2.75 0 0020.25 3H17v-.25A1.75 1.75 0 0015.25 1h-6.5zM17 4.5h3.25c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25H7v.25c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0017 4.75V4.5zm-8.5.25c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25v-2a.25.25 0 00-.25-.25h-6.5a.25.25 0 00-.25.25v2z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
