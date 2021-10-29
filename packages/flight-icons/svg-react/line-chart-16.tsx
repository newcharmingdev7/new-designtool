import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconLineChart16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M2.25 1A2.25 2.25 0 000 3.25v9.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-9.5A2.25 2.25 0 0013.75 1H2.25zM1.5 3.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75H11V13a.75.75 0 00-1.5 0v.5h-3V13A.75.75 0 005 13v.5H2.25a.75.75 0 01-.75-.75v-1.19l4.636-3.708 3.586 1.345a.752.752 0 00.76-.122l2.487-1.99a.75.75 0 10-.938-1.17L9.864 7.647 6.28 6.303a.754.754 0 00-.754.116L1.5 9.64V3.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
