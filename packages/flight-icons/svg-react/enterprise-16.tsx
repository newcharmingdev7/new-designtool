import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconEnterprise16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M9.872 1.774a6.516 6.516 0 013.693 2.864.75.75 0 101.283-.777 8 8 0 10-9.054 11.83.75.75 0 10.412-1.441A6.505 6.505 0 011.52 8.5h2.503a10.929 10.929 0 001.396 4.619.75.75 0 001.307-.736A9.437 9.437 0 015.527 8.5h.723a.75.75 0 000-1.5h-.67C5.835 5.124 6.667 3.335 8 1.836a10.102 10.102 0 011.736 2.71.75.75 0 101.377-.593 11.442 11.442 0 00-1.241-2.18zm-3.744 0A6.508 6.508 0 001.576 7H4.07a11.095 11.095 0 012.06-5.226z"
                        clipRule="evenodd"
                    />
                    <path d="M7.5 7.75A2.25 2.25 0 019.75 5.5h4A2.25 2.25 0 0116 7.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v7.5a.75.75 0 01-1.5 0v-7.5z" />
                    <path d="M10.25 12a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0V13.5h1.5v1.75a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75h-3zM9.75 8.5a.75.75 0 01.75-.75h.25a.75.75 0 010 1.5h-.25a.75.75 0 01-.75-.75zM12.75 7.75a.75.75 0 000 1.5H13a.75.75 0 000-1.5h-.25zM9.75 10.5a.75.75 0 01.75-.75h.25a.75.75 0 010 1.5h-.25a.75.75 0 01-.75-.75zM12.75 9.75a.75.75 0 000 1.5H13a.75.75 0 000-1.5h-.25z" />
                </g>
            </svg>
        );
    }
);
